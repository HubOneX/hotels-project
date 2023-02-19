import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const FlexCenteredContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
});

export const FlexCenterAlignedBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});
