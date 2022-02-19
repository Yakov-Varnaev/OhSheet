import React, { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";

export const Login = (props) => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setCreds((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const styles = {
    mt: 2,
  };
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontFamily: "Bokor" }}>
          Login
        </Typography>
        <Box
          component="form"
          sx={{
            backgroundColor: "#383A3D20",
            borderRadius: 5,
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}
          maxWidth="xs"
        >
          <TextField
            sx={styles}
            name="username"
            value={creds.username}
            onChange={handleChange}
            label="Username"
            variant="outlined"
          />
          <TextField
            sx={styles}
            name="password"
            value={creds.password}
            onChange={handleChange}
            type="password"
            label="Password"
            variant="outlined"
          />
          <Box sx={styles}>
            <Button
              variant="contained"
              sx={{ background: "#383A3D", color: "#D7CFCD" }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ fontWeight: 300 }}>
          Developed by <strong>YV</strong>
        </Typography>
      </Box>
    </Container>
  );
};
