import { createSlice } from "@reduxjs/toolkit";
import { checkAuthenticated, loadUser, registerAction, signinAction, updateUserAction } from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  user: null,
  err: null
};

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
      const { access, refresh } = action.payload;
      localStorage.setItem("access", access)
      localStorage.setItem("refresh", refresh)
      return { ...state, isAuthenticated: true };
    });
    builder.addCase(signinAction.rejected, (state, action) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return { ...state, err: action.payload, isAuthenticated: false };
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      return { ...state, user: action.payload }
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      return { ...state, user: null }
    })
    builder.addCase(checkAuthenticated.fulfilled, (state, action) => {
      return { ...state, isAuthenticated: true}
    });
    builder.addCase(checkAuthenticated.rejected, (state, action) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return { ...state, isAuthenticated: false}
    });
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      return { ...state, user: action.payload}
    })
    builder.addCase(updateUserAction.rejected, (state, action) => {
      return {...state, updateFailed: true, updateError: action.payload }
    })
  },
});

export default authSlice;
