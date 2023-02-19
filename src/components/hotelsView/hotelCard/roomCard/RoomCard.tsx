import { Box, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import { RoomData } from "../../../../types/DataTypes";
import styled from "@emotion/styled";
import breakpoints from "../../../../constants/breakpoints";
import RoomInformation from "./roomInformation/RoomInformation";

type Props = { room: RoomData };

// used 'display: grid' instead of Grid MUI component for the constant 250px col for desktop view
const GridBox = styled(Box)`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 25px;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

const RoomCard: FC<Props> = ({ room }) => {
  const { name, occupancy, longDescription } = room;

  return (
    <>
      <Divider sx={{ margin: "14px 0" }} />
      <GridBox data-testid="RoomCard">
        <RoomInformation name={name} occupancy={occupancy} />
        <Typography variant="body1" sx={{ width: "98%" }}>
          {longDescription}
        </Typography>
      </GridBox>
    </>
  );
};

export default RoomCard;
