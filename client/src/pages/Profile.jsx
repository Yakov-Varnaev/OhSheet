import React from "react";
import { useParams } from "react-router-dom";
import { ThemeProvider, createTheme, Avatar, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const theme = createTheme();

export default function Profile(props) {
  const { id } = useParams();
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
              Yakov Varnaev
            </Typography>
            <Typography component="span" color="#888">
              yakov@yakov.com
            </Typography>
          </Box>
        </CssBaseline>
      </Container>
    </ThemeProvider>
  );
}
