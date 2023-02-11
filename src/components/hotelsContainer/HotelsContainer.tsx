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
});

const HotelsContainer: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default HotelsContainer;