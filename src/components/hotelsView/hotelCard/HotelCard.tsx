import styled from "@emotion/styled";
import { Box, Rating } from "@mui/material";
import React, { FC } from "react";
import colors from "../../../constants/colors";
import HotelInformation from "./hotelInformation/HotelInformation";

type Props = {
  hotelName: string;
  hotelAddressFirstLine: string;
  hotelAddressSecondLine: string;
  starRating: number;
};

const CardWrapper = styled(Box)({
  width: "100%",
  margin: "15px 0",
  padding: "15px",
  display: "flex",
  borderRadius: "8px",
  boxShadow: `0px 8px 12px -8px ${colors.midGrey}`,
  backgroundColor: colors.lightGrey
});

const HotelInformationWrapper = styled(Box)({
  marginLeft: "15px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

const HotelCard: FC<Props> = ({
  hotelName,
  hotelAddressFirstLine,
  hotelAddressSecondLine,
  starRating,
}) => {
  return (
    <CardWrapper data-testid="HotelCard">
      <Box sx={{ width: "250px", height: "150px", backgroundColor: "yellow" }}>
        Image Placeholder
      </Box>
      <HotelInformationWrapper>
        <HotelInformation
          hotelName={hotelName}
          hotelAddressFirstLine={hotelAddressFirstLine}
          hotelAddressSecondLine={hotelAddressSecondLine}
        />
        <Rating value={starRating} readOnly size="large"/>
      </HotelInformationWrapper>
    </CardWrapper>
  );
};

export default HotelCard;
