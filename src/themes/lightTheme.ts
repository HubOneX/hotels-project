import { createTheme } from "@mui/material/styles";
import { lightBlue, pink } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: pink,
  },
});

lightTheme.typography.body2 = {
  fontWeight: 400,
  fontSize: '15px',
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}

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

lightTheme.typography.h5 = {
  fontWeight: 400,
  fontSize: "20px",
  marginBottom: "8px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
};

lightTheme.typography.subtitle1 = {
  fontWeight: 400,
  fontSize: "14px",
  marginBottom: "6px",
};

lightTheme.typography.body1 = {
  fontWeight: 400,
  fontSize: "15px",
  [lightTheme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
};

export default lightTheme;
