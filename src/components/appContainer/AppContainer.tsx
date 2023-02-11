import Container from "@mui/material/Container";
import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";

type Props = {
  children?: ReactNode;
};

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "100% !important",
  padding: '0 !important'
});

const AppContainer: FC<Props> = ({ children }) => {
  return <StyledContainer fixed>{children}</StyledContainer>;
};

export default AppContainer;
