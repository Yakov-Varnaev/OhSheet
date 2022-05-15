import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { registerAction } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const apiErrors = useSelector((state) => state.auth.errors);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required(),
    passwordRepeat: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });
  const combinedErrors = apiErrors ? apiErrors : {};

  Object.entries(errors).forEach(([field, data]) => {
    if (field in combinedErrors) {
      combinedErrors[field] = [...combinedErrors[field], data.message];
    } else {
      combinedErrors[field] = [data.message];
    }
  });

  const onSubmit = (data) => {
    dispatch(registerAction(data));
    reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("firstName")}
                  autoComplete="given-name"
                  name="firstName"
                  error={combinedErrors.firstName?.length ? true : false}
                  helperText={combinedErrors.firstName}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  {...register("lastName")}
                  error={combinedErrors.lastName?.length ? true : false}
                  helperText={combinedErrors.lastName}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  {...register("email")}
                  error={combinedErrors.email?.length ? true : false}
                  helperText={combinedErrors.email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  {...register("password")}
                  error={combinedErrors.password?.length ? true : false}
                  helperText={combinedErrors.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  {...register("passwordRepeat")}
                  error={errors.passwordRepeat ? true : false}
                  helperText={errors.passwordRepeat?.message}
                  name="passwordRepeat"
                  label="Repeat Password"
                  type="password"
                  id="passwordRepeat"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
