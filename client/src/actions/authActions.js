import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerAction = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    data.username = data.email;
    const response = await fetch("http://localhost:8000/api/auth/users/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (!response.ok) {
      return rejectWithValue({json});
    }
    return { auth: await json };
  }
);

export const signinAction = createAsyncThunk(
  "auth/signin",
  async (data, { rejectWithValue }) => {
    const response = await fetch("http://localhost:8000/api/auth/jwt/create/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (!response.ok) {
      return rejectWithValue({err: json});
    }
    return json;
  }
);

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (data, {rejectWithValue}) => {
    const token = localStorage.getItem("access")
    if (!token) {
      return rejectWithValue({err: "no_token"});
    } else {
      const config = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        }
      }
      try {
        const response = await fetch("http://localhost:8000/api/auth/users/me/", config);
        const json = await response.json()
        return json
      } catch (err) {
        return rejectWithValue({})
      }
    }
  }
);

export const checkAuthenticated = createAsyncThunk(
  "auth/isAuthenticated",
  async (data, {rejectWithValue}) => {
    const token = localStorage.getItem("access")
    if (!token) {
      return rejectWithValue({detail: ["no token"]});
    }

    const config = {
      method: "post",
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({token})
    };
    try {
      const response = await fetch("http://localhost:8000/api/auth/jwt/verify/", config)
      const json = await response.json();
      if (!response.ok || json.code === "token_not_valid") {
        return rejectWithValue({detail: ["no_token"]});
      }
      return {isAuthenticated: true}
    } catch (err) {
      return rejectWithValue({detail: [err]});
    }
  }
);

