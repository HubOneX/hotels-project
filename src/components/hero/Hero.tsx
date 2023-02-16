import { Box, Typography } from "@mui/material";
import React from "react";
import colors from "../../constants/colors";

const Hero = () => {
  return (
    // as discussed in the email conversation this part doesn't have an image from the API call

    <Box
      sx={{
        background: `linear-gradient(159deg,  ${colors.blue} 0%, ${colors.pink} 130%);`,
        width: "100%",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        boxShadow: `0px -1px 30px 0px ${colors.midGrey}`,
      }}
    >
      <Typography variant="h1">HotelsFindr</Typography>
      <Typography variant="h2">
        This is a place for a great catchphrase
      </Typography>
    </Box>
  );
};

export default Hero;
