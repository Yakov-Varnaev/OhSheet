import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export function performLogin({ username, password }) {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost:8000/api/v1/auth/jwt/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    if (response.status >= 400) {
      dispatch({ type: LOGIN_FAIL, payload: false });
    } else {
      const json = await response.json();
      localStorage.setItem("access_token", json.access);
      localStorage.setItem("refresh_token", json.refresh);
      dispatch({ type: LOGIN_SUCCESS, payload: true });
    }
  };
}

export function performLogout() {
  return async (dispatch) => {
    dispatch({ type: LOGOUT, payload: false });
  };
}
