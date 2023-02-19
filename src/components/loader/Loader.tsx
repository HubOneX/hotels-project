import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { FlexColumnContainer } from "../utilityComponents/styledComponents";

const LoaderContainer = styled(FlexColumnContainer)({
  alignItems: "center",
  marginTop: "5vh",
});

const Loader = () => {
  return (
    <LoaderContainer>
      <Typography sx={{ marginBottom: "20px", fontSize: "20px" }}>
        Loading data...
      </Typography>
      <CircularProgress size={80} />
    </LoaderContainer>
  );
};

export default Loader;
