import { Box, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import { RoomData } from "../../../../types/DataTypes";
import styled from "@emotion/styled";
import breakpoints from "../../../../constants/breakpoints";

type Props = RoomData;

const RoomInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.md}px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }
`;

const RoomCard: FC<Props> = ({ name, longDescription, occupancy }) => {
  return (
    <>
      <Divider sx={{ margin: "14px 0" }} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "250px 1fr" },
          gap: "25px",
        }}
        data-testid="RoomCard"
      >
        <RoomInfoContainer>
          <Typography
            variant="subtitle1"
            sx={{ marginRight: "auto", width: { xs: "50%", sm: "auto" } }}
          >
            {name}
          </Typography>
          <Typography variant="subtitle2">
            Adults: {occupancy.maxAdults}
          </Typography>
          <Typography variant="subtitle2">
            Children: {occupancy.maxChildren}
          </Typography>
        </RoomInfoContainer>
        <Typography variant="body1" sx={{ width: "98%" }}>
          {longDescription}
        </Typography>
      </Box>
    </>
  );
};

export default RoomCard;
