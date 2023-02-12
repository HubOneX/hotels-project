import { CircularProgress, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

const Loader = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40vh",
      }}
    >
      <Typography sx={{ marginBottom: "20px", fontSize: "20px" }}>
        Loading data...
      </Typography>
      <CircularProgress size={80} />
    </Container>
  );
};

export default Loader;
