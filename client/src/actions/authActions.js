import { createAsyncThunk } from "@reduxjs/toolkit";

export const thunkPerformRegister = createAsyncThunk(
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
