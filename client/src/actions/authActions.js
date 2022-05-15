import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerAction = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    data.username = data.email;
    const response = await fetch("http://localhost:8000/api/auth/users/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    } else {
      return { errors: await response.json() };
    }
  }
);

export const signinAction = createAsyncThunk(
  "auth/signin",
  async (data, thunkApi) => {
    const response = await fetch("http://localhost:8000/api/auth/jwt/create/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return await { tokens: await response.json() };
    } else {
      return { errors: await response.json() };
    }
  }
);
