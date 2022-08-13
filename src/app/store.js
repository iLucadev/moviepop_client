import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contentReducer from "../features/content/contentSlice";
import authReducer from "../features/auth/authSlice";

//Redux store configuration
const reducer = combineReducers({
  authReducer,
  contentReducer,
});

export const store = configureStore({
  //Reducers
  reducer,
});

/* {
  content: contentReducer,
}, */
