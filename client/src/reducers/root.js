import { combineReducers } from "redux";
import authSlice from "./authReducer";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
