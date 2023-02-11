import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { FC } from "react";
import colors from "../../../constants/colors";
import HotelInformation from "./hotelInformation/HotelInformation";
import HotelRating from "./hotelRating/HotelRating";

type Props = {
  hotelName: string;
  hotelAddressFirstLine: string;
  hotelAddressSecondLine: string;
  starRating: number;
};

const CardWrapper = styled(Box)({
  width: "100%",
  // backgroundColor: "limegreen",
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
    <CardWrapper>
      <Box sx={{ width: "250px", height: "150px", backgroundColor: "yellow" }}>
        Image Placeholder
      </Box>
      <HotelInformationWrapper>
        <HotelInformation
          hotelName={hotelName}
          hotelAddressFirstLine={hotelAddressFirstLine}
          hotelAddressSecondLine={hotelAddressSecondLine}
        />
        <HotelRating starRating={starRating} />
      </HotelInformationWrapper>
    </CardWrapper>
  );
};

export default HotelCard;
