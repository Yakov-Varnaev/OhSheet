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
      return rejectWithValue(json);
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
      rejectWithValue(json);
    }
    return { tokens: json };
  }
);
