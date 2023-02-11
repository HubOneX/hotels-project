import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

type Props = {
  hotelName: string;
  hotelAddressFirstLine: string;
  hotelAddressSecondLine: string;
};

const HotelInformation: FC<Props> = ({
  hotelName,
  hotelAddressFirstLine,
  hotelAddressSecondLine,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h3">{hotelName}</Typography>
      <Typography variant="subtitle1">{hotelAddressFirstLine}</Typography>
      <Typography variant="subtitle1">{hotelAddressSecondLine}</Typography>
    </Box>
  );
};

export default HotelInformation;
