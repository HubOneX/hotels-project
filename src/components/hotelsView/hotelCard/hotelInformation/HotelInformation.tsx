import { Box, Rating, Typography } from "@mui/material";
import React, { FC } from "react";
import styled from "@emotion/styled";

type Props = {
  hotelName: string;
  hotelAddressFirstLine: string;
  hotelAddressSecondLine: string;
  starRating: number;
};

const HotelInformationWrapper = styled(Box)({
  marginLeft: "25px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const HotelInformation: FC<Props> = ({
  hotelName,
  hotelAddressFirstLine,
  hotelAddressSecondLine,
  starRating,
}) => {
  return (
    <HotelInformationWrapper>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h3">{hotelName}</Typography>
        <Typography variant="h4">{hotelAddressFirstLine}</Typography>
        <Typography variant="h4">{hotelAddressSecondLine}</Typography>
      </Box>
      <Rating value={starRating} readOnly size="large" />
    </HotelInformationWrapper>
  );
};

export default HotelInformation;
