import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React, { FC } from "react";
import { HotelData } from "../../types/DataTypes";
import HotelCard from "./hotelCard/HotelCard";
import NoHotelsFoundInfo from "./hotelCard/noHotelsFoundInfo/NoHotelsFoundInfo";

type Props = { hotelsData: HotelData[]; isInitialLoad: boolean };

const HotelsContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  minHeight: "50vh",
});

const HotelsView: FC<Props> = ({ hotelsData, isInitialLoad }) => {
  return (
    <HotelsContainer sx={{ marginTop: { xs: "-45px", sm: "10px" } }}>
      {hotelsData && hotelsData.length !== 0
        ? hotelsData.map((hotel) => {
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
          })
        : !isInitialLoad && <NoHotelsFoundInfo />}
    </HotelsContainer>
  );
};

export default HotelsView;
