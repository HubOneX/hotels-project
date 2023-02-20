import styled from "@emotion/styled";
import { Link, Typography } from "@mui/material";
import React, { FC } from "react";
import colors from "../../constants/colors";
import { FlexCenterAlignedBox } from "../utilityComponents/styledComponents";

// Added so the spaces around the Link are being rendered in a way that doesn't clutter the code,
// normally I would use translations with these spaces already in them.
const madeBy = "Made by ";
const forInterview = " for a technical interview.";

const FooterBox = styled(FlexCenterAlignedBox)({
  height: "10vh",
  width: "100%",
  backgroundColor: colors.blue,
  marginTop: "50px",
  boxShadow: `0px 6px 30px 0px ${colors.midGrey}`,
  color: colors.white,
});

const StyledLink = styled(Link)({
  color: colors.white,
  fontWeight: 500,
  letterSpacing: "1px",
});

type Props = {
  fixedAtBottom: boolean;
};

const Footer: FC<Props> = ({ fixedAtBottom }) => {
  return (
    <FooterBox
      sx={{
        position: `${fixedAtBottom ? "fixed" : "inherit"}`,
        bottom: `${fixedAtBottom ? "0" : "inherit"}`,
      }}
    >
      <Typography sx={{ marginLeft: "30px" }}>
        {madeBy}
        <StyledLink
          target="_blank"
          href="https://github.com/HubOneX"
          underline="hover"
        >
          Hubert Dardzinski
        </StyledLink>
        {forInterview}
      </Typography>
    </FooterBox>
  );
};

export default Footer;
