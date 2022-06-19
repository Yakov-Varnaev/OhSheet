import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../actions/authActions";

const theme = createTheme();

const NameInputSX = {
  width: "30%",
  m: 1,
};

export default function Profile(props) {
  const { id } = useParams();
  let user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const initialFullName = {
    first_name: user?.first_name ? user.first_name : "First",
    last_name: user?.last_name ? user.last_name : "Last",
  };
  const [userFullName, setUserFullName] = useState({ ...initialFullName });

  const isFullNameChanged =
    initialFullName.first_name !== userFullName.first_name ||
    initialFullName.last_name !== userFullName.last_name;

  const onClick = (e) => {
    console.log("Profile Update");
    dispatch(updateUserAction(userFullName));
  };

  const onChange = (e) => {
    setUserFullName({ ...userFullName, [e.target.name]: e.target.value });
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "4",
            }}
          >
            <Avatar sx={{ width: "10em", height: "10em", marginTop: 5 }}>
              <AccountCircle sx={{ fontSize: "10em" }} />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              fontWeight={500}
            >
              <TextField
                sx={NameInputSX}
                InputProps={{
                  inputProps: {
                    style: { textAlign: "center" },
                  },
                }}
                id="first_name"
                name="first_name"
                variant="standard"
                onChange={onChange}
                value={userFullName.first_name}
              />
              <TextField
                sx={NameInputSX}
                id="last_name"
                name="last_name"
                variant="standard"
                value={userFullName.last_name}
                onChange={onChange}
                InputProps={{
                  inputProps: {
                    style: { textAlign: "center" },
                  },
                }}
              />
            </Typography>
            <Typography component="span" color="#888">
              {user?.email}
            </Typography>
            {isFullNameChanged && <Button onClick={onClick}>Save</Button>}
          </Box>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  );
}
