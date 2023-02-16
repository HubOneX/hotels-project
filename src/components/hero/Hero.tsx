import { Box, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(159deg,  rgba(1,166,226,1) 0%, rgba(223,37,102,1) 130%);",
        width: "100%",
        height: { xs: "400px", md: "350px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">HotelsFindr</Typography>
      <Typography variant="h2">
        This is your place for a great catchphrase
      </Typography>
    </Box>
  );
};

export default Hero;
