import { Typography } from "@mui/material";
import React, { FC } from "react";
import breakpoints from "../../../../../constants/breakpoints";
import { Occupancy } from "../../../../../types/DataTypes";
import { FlexColumnContainer } from "../../../../utilityComponents/styledComponents";
import styled from "@emotion/styled";

const RoomInfoContainer = styled(FlexColumnContainer)`
  @media (max-width: ${breakpoints.md}px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding: 0;
  }
`;

type Props = {
  name: string;
  occupancy: Occupancy;
};

const RoomInformation: FC<Props> = ({ name, occupancy }) => {
  return (
    <RoomInfoContainer>
      <Typography
        variant="subtitle1"
        sx={{ marginRight: "auto", width: { xs: "50%", sm: "auto" } }}
      >
        {name}
      </Typography>

      <Typography variant="subtitle2">Adults: {occupancy.maxAdults}</Typography>

      <Typography variant="subtitle2">
        Children: {occupancy.maxChildren}
      </Typography>
    </RoomInfoContainer>
  );
};

export default RoomInformation;
