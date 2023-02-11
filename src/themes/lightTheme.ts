import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme();

lightTheme.typography.h3 = {
  fontWeight: 500,
  fontSize: "30px",
  marginBottom: "8px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
};

lightTheme.typography.subtitle1 = {
  fontWeight: 400,
  fontSize: "20px",
  marginBottom: "6px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
};

export default lightTheme;
