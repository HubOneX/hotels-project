import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { FC } from "react";
import colors from "../../../constants/colors";
import { HotelData } from "../../../types/HotelTypes";
import HotelImages from "./hotelImages/HotelImages";
import HotelInformation from "./hotelInformation/HotelInformation";
import RoomCard from "./roomCard/RoomCard";

type Props = HotelData;

const CardWrapper = styled(Box)({
  width: "100%",
  margin: "15px 0",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  boxShadow: `0px 8px 12px -8px ${colors.midGrey}`,
  backgroundColor: colors.lightGrey,
});

const HotelHeader = styled(Box)({
  display: "flex",
});

const HotelCard: FC<Props> = ({
  hotelName,
  hotelAddressFirstLine,
  hotelAddressSecondLine,
  starRating,
  images,
  roomsData,
}) => {
  return (
    <CardWrapper data-testid="HotelCard">
      <HotelHeader>
        <HotelImages images={images} />
        <HotelInformation
          hotelName={hotelName}
          hotelAddressFirstLine={hotelAddressFirstLine}
          hotelAddressSecondLine={hotelAddressSecondLine}
          starRating={starRating}
        />
      </HotelHeader>
      {roomsData && roomsData.map((room) => {
        return (
          <RoomCard
            key={room.id}
            name={room.name}
            longDescription={room.longDescription}
            occupancy={room.occupancy}
          />
        );
      })}
    </CardWrapper>
  );
};

export default HotelCard;
