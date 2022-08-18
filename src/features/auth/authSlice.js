import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { admin } from "../../utils/user";

const initialState = {
  loading: false,
  hasError: false,
  user: null,
  user_favorites: [],
  token: null,
  isAuth: false,
  success: false,
};

const APIurl = "http://localhost:4000";

//Slice for authentication with our reducers
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authentication: (state) => {
      state.loading = true;
    },
    logIn: (state, { payload }) => {
      state.token = payload;
      state.loading = false;
      state.hasError = false;
    },
    getUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.hasError = false;
    },
    getUserFavorites: (state, action) => {
      state.user_favorites = action.payload;
      state.loading = false;
      state.hasError = false;
    },
    logInFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
    isAuth: (state, { payload }) => {
      state.isAuth = payload;
      state.loading = false;
      state.hasError = false;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
      state.hasError = false;
    },
  },
});

//Actions generated from the slice
export const {
  authentication,
  logIn,
  logInFailure,
  isAuth,
  getUser,
  getUserFavorites,
  logOut,
} = authSlice.actions;

//Reducer
export default authSlice.reducer;

//Selectors
export const authSelector = (state) => state.authReducer;

//Async thunk actions
export const fetchUser = (userCredentials) => {
  return async (dispatch) => {
    dispatch(authentication());

    try {
      const res1 = await axios.post(`${APIurl}/login`, userCredentials);
      console.log(res1);
      console.log(res1.data);
      const res2 = await axios.get(
        `${APIurl}/users/email/${userCredentials.user_email}`
      );
      console.log(res2);

      dispatch(logIn(res1.data.token));
      dispatch(getUser(res2.data[0][0]));
    } catch (err) {
      dispatch(logInFailure());
    }
  };
};

export const askForAuth = (token) => {
  console.log(token);

  return async (dispatch) => {
    dispatch(authentication());

    try {
      const res1 = await axios.get(`${APIurl}/isAuth`, token);
      const data1 = res1.data;
      console.log(data1);
      dispatch(isAuth(data1.auth));
      const res2 = await axios.get(
        `${APIurl}/users/email/${data1.decoded.user_email}`
      );
      const data2 = res2.data;
      console.log(data2);
      dispatch(getUser(data2[0][0]));
    } catch (err) {
      console.log("no sirve");
    }
  };
};

export const getUserFavoritesFunction = (userId) => {
  return async (dispatch) => {
    dispatch(authentication());

    try {
      const res = await axios.get(`${APIurl}/users/favorites/${userId}`);
      const data = res.data;

      dispatch(getUserFavorites(data[0]));
    } catch (err) {
      console.log(err);
    }
  };
};

export const saveNewUserFavorite = (user_id, content_id) => {
  const newFavorite = {
    user_id,
    content_id,
  };

  return async (dispatch) => {
    dispatch(authentication());

    try {
      const res = await axios.post(`${APIurl}/users/favorites`, newFavorite);
      const data = res.data;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
};

export const logOutFunction = () => {
  return async (dispatch) => {
    dispatch(logOut());
  };
};
