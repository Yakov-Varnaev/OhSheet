import React from "react";

import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

export default function Header() {
  return (
    <Box>
      <AppBar position="static" style={{ background: "#333" }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }} component="span">
              <span className="logo-text">OhSheet</span>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
