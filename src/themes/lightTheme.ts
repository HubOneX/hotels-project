import { createTheme } from "@mui/material/styles";
import breakpoints from "../constants/breakpoints";
import colors from "../constants/colors";

const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
    },
  },
});

lightTheme.typography.h1 = {
  fontWeight: 300,
  letterSpacing: "1.5px",
  fontSize: "98px",
  marginTop: "60px",
  textAlign: "center",
  color: colors.white,
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "65px",
    letterSpacing: "1px",
  },
};

lightTheme.typography.h2 = {
  fontWeight: 100,
  letterSpacing: "2.5px",
  fontSize: "44px",
  margin: "12px 90px 0 20px",
  textAlign: "right",
  color: colors.white,
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "32px",
    margin: "0 5vw 0 0",
  },
};

lightTheme.typography.h3 = {
  fontWeight: 500,
  fontSize: "30px",
  marginBottom: "8px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
};

lightTheme.typography.h4 = {
  fontWeight: 400,
  fontSize: "20px",
  marginBottom: "8px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
};

lightTheme.typography.subtitle1 = {
  fontWeight: 500,
  fontSize: "20px",
  marginBottom: "8px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
};

lightTheme.typography.subtitle2 = {
  fontWeight: 400,
  fontSize: "14px",
  marginBottom: "6px",
  [lightTheme.breakpoints.down("md")]: {
    fontWeight: 500,
  },
};

lightTheme.typography.body1 = {
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "23px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "12px",
    lineHeight: "18px",
  },
  [lightTheme.breakpoints.down("md")]: {
    textAlign: "justify",
  },
};

lightTheme.typography.body2 = {
  fontWeight: 400,
  fontSize: "15px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
};

export default lightTheme;
