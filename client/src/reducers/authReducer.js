import { createSlice } from "@reduxjs/toolkit";
import { registerAction, signinAction } from "../actions/authActions";

const initialState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    performRegister(state, action) {
      state = { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAction.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      return { ...state, err: action.payload };
    });
    builder.addCase(signinAction.fulfilled, (state, action) => {
      return { ...state, ...action.payload, loggedIn: true };
    });
    builder.addCase(signinAction.rejected, (state, action) => {
      return { ...state, err: action.payload };
    });
  },
});

export const { performRegister } = authSlice.actions;
export default authSlice;

