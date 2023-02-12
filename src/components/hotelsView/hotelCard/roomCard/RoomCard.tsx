import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { RoomData } from "../../../../types/HotelTypes";

type Props = RoomData;

const RoomCard: FC<Props> = ({ id, name, longDescription, occupancy }) => {
  return (
    <Box key={id} sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "16%",
        }}
      >
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">Adults: {occupancy.maxAdutls}</Typography>
        <Typography variant="subtitle1">Children: {occupancy.maxChildren}</Typography>
      </Box>
      <Typography variant="body1" sx={{ width: "80%" }}>
        {longDescription}
      </Typography>
    </Box>
  );
};

export default RoomCard;
