import { Box, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import { RoomData } from "../../../../types/DataTypes";

type Props = RoomData;

const RoomCard: FC<Props> = ({ name, longDescription, occupancy }) => {
  return (
    <>
      <Divider sx={{ margin: "10px 0" }} />

      <Box sx={{ display: "flex", justifyContent: "space-around" }} data-testid='RoomCard'>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "16%",
          }}
        >
          <Typography variant="h4">{name}</Typography>
          <Typography variant="subtitle1">
            Adults: {occupancy.maxAdults}
          </Typography>
          <Typography variant="subtitle1">
            Children: {occupancy.maxChildren}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ width: "80%" }}>
          {longDescription}
        </Typography>
      </Box>
    </>
  );
};

export default RoomCard;
