import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types";

const initialState = {
  isAuthenticated: false,
};

export const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...prevState, isAuthenticated: action.payload };
    case LOGIN_FAIL:
      return { ...prevState, isAuthenticated: action.payload };
    default:
      return prevState;
  }
};
