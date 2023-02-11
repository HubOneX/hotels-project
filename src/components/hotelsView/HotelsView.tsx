import React, { FC } from "react";
import { HotelInformation } from "../../types/HotelTypes";
import HotelCard from "./hotelCard/HotelCard";
import HotelsContainer from "./hotelsContainer/HotelsContainer";

type Props = { hotelsData: HotelInformation[] };

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
            key={hotel.hotelName}
          />
        );
      })}
    </HotelsContainer>
  );
};

export default HotelsView;
