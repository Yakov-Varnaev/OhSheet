import {
  LOGIN_HEADER,
  REGISTER_HEADER,
  ANON_HEADER,
  AUTHENTICATED_HEADER,
} from "../types";

export function showLoginHeader() {
  return { type: LOGIN_HEADER };
}

export function showRegisterHeader() {
  return { type: REGISTER_HEADER };
}
