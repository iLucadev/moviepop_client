import { createSlice } from "@reduxjs/toolkit";
import { content } from "../../utils/dummy";

const initialState = content;

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    getContentFromAPI: () => {},
    saveAsFavorite: () => {},
  },
});

export const { getContentFromAPI, saveAsFavorite } = contentSlice.actions;

export default contentSlice.reducer;
