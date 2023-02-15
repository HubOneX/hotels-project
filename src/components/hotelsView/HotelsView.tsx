import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { HotelData } from "../../types/DataTypes";
import HotelCard from "./hotelCard/HotelCard";

type Props = { hotelsData: HotelData[]; isInitialLoad: boolean };

const HotelsContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "10px",
});

const HotelsView: FC<Props> = ({ hotelsData, isInitialLoad }) => {
  return (
    <HotelsContainer>
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
        : !isInitialLoad && (
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                marginTop: "30px",
                lineHeight: "35px",
              }}
              data-testid="NoHotelsInfo"
            >
              Unfortunatelly, we couldn't find rooms meeting your requirements.
              <br />
              Please change your filters.
            </Typography>
          )}
    </HotelsContainer>
  );
};

export default HotelsView;
