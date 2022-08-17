import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { content } from "../../utils/dummy";

const initialState = {
  loading: false,
  hasError: false,
  content: [],
};
const APIurl = "http://api.tvmaze.com/search/shows?q=star%20wars";

//Slice for content with our reducers
export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    getContent: (state) => {
      state.loading = true;
    },
    getContentSuccess: (state, { payload }) => {
      state.content = payload;
      state.loading = false;
      state.hasError = false;
    },
    getContentFailure: (state) => {
      state.loading = false;
      state.hasError = true;
    },
  },
});

//Actions generated from the slice
export const { getContent, getContentSuccess, getContentFailure } =
  contentSlice.actions;

//Selector
export const contentSelector = (state) => state.contentReducer;

//Reducer
export default contentSlice.reducer;

//Async thunk action
export const fetchContent = () => {
  return async (dispatch) => {
    dispatch(getContent());

    try {
      const res = await axios.get(APIurl);
      const data = res.data;
      console.log(data);

      dispatch(getContentSuccess(data));
    } catch (err) {
      dispatch(getContentFailure());
    }
  };
};
