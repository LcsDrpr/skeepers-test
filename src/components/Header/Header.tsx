import { AppBar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Stack width="100%">
      <AppBar position="static" className="header-bar">
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          className="inner-header"
        >
          <Typography variant="h4">SKEEPERS</Typography>

          <Typography variant="subtitle1">
            Thank you for the opportunity
          </Typography>
        </Stack>
      </AppBar>
    </Stack>
  );
};

export default Header;
