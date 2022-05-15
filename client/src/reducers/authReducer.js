import { createSlice } from "@reduxjs/toolkit";
import { thunkPerformRegister } from "../actions/authActions";

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
    builder.addCase(thunkPerformRegister.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export const { performRegister } = authSlice.actions;
export default authSlice;
