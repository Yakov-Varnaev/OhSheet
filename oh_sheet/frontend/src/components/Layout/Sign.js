import React from "react";
import { Box, Typography } from "@mui/material";

export const Sign = () => {
  return (
    <Box alignItems="center" sx={{ padding: 20 }}>
      <Typography
        sx={{
          background: "#C4C4C4",
          borderTopLeftRadius: 6,
          padding: 1,
        }}
        variant="subtitle2"
      >
        Developed by YV
      </Typography>
    </Box>
  );
};
