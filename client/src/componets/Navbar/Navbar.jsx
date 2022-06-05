import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OhSheet
          </Typography>
          <Button color="inherit" LinkComponent={RouterLink} to="/home">
            Home
          </Button>
          {isAuthenticated ? (
            <>
              <Button
                color="inherit"
                LinkComponent={RouterLink}
                to="/profile/me"
              >
                Profile
              </Button>
            </>
          ) : (
            <Button color="inherit" LinkComponent={RouterLink} to="/signin">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
