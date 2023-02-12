import React, { FC } from "react";
import { HotelData } from "../../types/HotelTypes";
import HotelCard from "./hotelCard/HotelCard";
import HotelsContainer from "./hotelsContainer/HotelsContainer";

type Props = { hotelsData: HotelData[] };

const HotelsView: FC<Props> = ({ hotelsData }) => {
  return (
    <HotelsContainer>
      {hotelsData.map((hotel) => {
        return (
          <HotelCard
            hotelName={hotel.hotelName}
            hotelAddressFirstLine={hotel.hotelAddressFirstLine}
            hotelAddressSecondLine={hotel.hotelAddressSecondLine}
            starRating={hotel.starRating}
            key={hotel.id}
            roomsData={hotel.roomsData}
          />
        );
      })}
    </HotelsContainer>
  );
};

export default HotelsView;
