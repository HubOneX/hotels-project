import React, { FC } from "react";
import { HotelData } from "../../types/HotelTypes";
import HotelCard from "./hotelCard/HotelCard";
import HotelsContainer from "./hotelsContainer/HotelsContainer";

type Props = { hotelsData: HotelData[] };

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
              key={hotel.id}
            />
          );
        })}
    </HotelsContainer>
  );
};

export default HotelsView;
