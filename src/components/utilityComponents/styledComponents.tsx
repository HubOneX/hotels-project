import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const FlexCenteredContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const FlexColumnContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
});

export const FlexCenterAlignedBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const FlexColumnBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const FlexCenteredBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
