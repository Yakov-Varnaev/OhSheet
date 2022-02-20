import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { headerReducer } from "./Header/headerReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
});
