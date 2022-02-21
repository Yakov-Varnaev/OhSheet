import { ANON_HEADER, LOGIN_HEADER, REGISTER_HEADER } from "../types";

export function showLoginHeader() {
  return { type: LOGIN_HEADER };
}

export function showRegisterHeader() {
  return { type: REGISTER_HEADER };
}

export function showAnonHeader() {
  return { type: ANON_HEADER };
}
