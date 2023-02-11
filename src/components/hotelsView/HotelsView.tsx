import React from "react";
import HotelCard from "./hotelCard/HotelCard";
import HotelsContainer from "./hotelsContainer/HotelsContainer";

const hotelsArray = [
  {
    hotelName: "Hotel 1",
    hotelAddressFirstLine: "Gdansk",
    hotelAddressSecondLine: "al. Grunwaldzka",
    starRating: 4,
  },
  {
    hotelName: "Second Hotel",
    hotelAddressFirstLine: "Warsaw",
    hotelAddressSecondLine: "ul. Gdanska",
    starRating: 1,
  },
  {
    hotelName: "Motel la Venturas",
    hotelAddressFirstLine: "Lloret de Mar",
    hotelAddressSecondLine: "First Avenue",
    starRating: 3,
  },
];

const HotelsView = () => {
  return (
    <HotelsContainer>
      {hotelsArray.map((hotel) => {
        return (
          <HotelCard
            hotelName={hotel.hotelName}
            hotelAddressFirstLine={hotel.hotelAddressFirstLine}
            hotelAddressSecondLine={hotel.hotelAddressSecondLine}
            starRating={hotel.starRating}
          />
        );
      })}
    </HotelsContainer>
  );
};

export default HotelsView;
