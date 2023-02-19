import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import colors from "../../constants/colors";
import { FlexColumnBox } from "../utilityComponents/styledComponents";

const HeaderBox = styled(FlexColumnBox)`
  background: linear-gradient(159deg, ${colors.blue} 0%, ${colors.pink} 130%);
  width: 100%;
  height: 350px;
  box-shadow: 0px -1px 30px 0px ${colors.midGrey};
`;

const Hero = () => {
  // as discussed in the email conversation this part doesn't have an image from the API call
  return (
    <HeaderBox>
      <Typography variant="h1">HotelsFindr</Typography>
      <Typography variant="h2">
        This is a place for a great catchphrase
      </Typography>
    </HeaderBox>
  );
};

export default Hero;
