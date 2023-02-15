import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React, { FC } from "react";
import { HotelData } from "../../types/DataTypes";
import HotelCard from "./hotelCard/HotelCard";

type Props = { hotelsData: HotelData[] };

const HotelsContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "10px"
});

const HotelsView: FC<Props> = ({ hotelsData }) => {
  return (
    <HotelsContainer>
      {hotelsData &&
        hotelsData.map((hotel) => {
          return (
            <HotelCard
              id={hotel.id}
              hotelName={hotel.hotelName}
              hotelAddressFirstLine={hotel.hotelAddressFirstLine}
              hotelAddressSecondLine={hotel.hotelAddressSecondLine}
              starRating={hotel.starRating}
              roomsData={hotel.roomsData}
              images={hotel.images}
              key={hotel.id}
            />
          );
        })}
    </HotelsContainer>
  );
};

export default HotelsView;
