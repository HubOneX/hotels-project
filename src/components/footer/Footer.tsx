import { Box, Link, Typography } from "@mui/material";
import React, { FC } from "react";
import colors from "../../constants/colors";

type Props = {
  fixedAtBottom: boolean;
};

const Footer: FC<Props> = ({ fixedAtBottom }) => {
  const madeBy = "Made by ";
  const forInterview = " for a technical interview.";

  return (
    <Box
      sx={{
        height: "10vh",
        width: "100%",
        backgroundColor: colors.blue,
        marginTop: "50px",
        boxShadow: `0px 6px 30px 0px ${colors.midGrey}`,
        position: `${fixedAtBottom ? "fixed" : "inherit"}`,
        bottom: `${fixedAtBottom ? "0" : "inherit"}`,
        color: colors.white,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography sx={{ marginLeft: "30px" }}>
        {madeBy}
        <Link
          target="_blank"
          href="https://github.com/HubOneX"
          underline="hover"
          sx={{
            color: colors.white,
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          Hubert Dardzinski
        </Link>
        {forInterview}
      </Typography>
    </Box>
  );
};

export default Footer;
