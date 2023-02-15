import { createTheme } from "@mui/material/styles";
import { lightBlue, pink } from "@mui/material/colors";
import breakpoints from "../constants/breakpoints";

const lightTheme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
  },
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
};

lightTheme.typography.body2 = {
  fontWeight: 400,
  fontSize: "15px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
};

export default lightTheme;
