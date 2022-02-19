import { LOGIN_SUCCESS } from "./types";

export function performLogin({ username, password }) {
  return {
    type: LOGIN_SUCCESS,
    payload: true,
  };
}
