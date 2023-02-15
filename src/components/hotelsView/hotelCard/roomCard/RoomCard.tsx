import { Box, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import { RoomData } from "../../../../types/DataTypes";

type Props = RoomData;

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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            justifyContent: {
              xs: "flex-end",
              md: "flex-start",
            },
            gap: { xs: "20px", md: 0 },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography variant="subtitle1" sx={{ marginRight: "auto", width: {xs: '50%' ,sm: 'auto'} }}>
            {name}
          </Typography>
          <Typography variant="subtitle2">
            Adults: {occupancy.maxAdults}
          </Typography>
          <Typography variant="subtitle2">
            Children: {occupancy.maxChildren}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ width: "98%" }}>
          {longDescription}
        </Typography>
      </Box>
    </>
  );
};

export default RoomCard;
