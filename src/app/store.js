import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/content/contentSlice";

//Redux store configuration
export const store = configureStore({
  //Reducers
  reducer: {
    content: contentReducer,
  },
});
