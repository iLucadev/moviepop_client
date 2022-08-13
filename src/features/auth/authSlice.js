import { createSlice } from "@reduxjs/toolkit";
import { admin } from "../../utils/user";

const initialState = admin;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    singIn: () => {},
    logIn: () => {},
    logOut: () => {},
  },
});

export const { singIn, logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
