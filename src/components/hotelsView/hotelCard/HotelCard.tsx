import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { FC } from "react";
import breakpoints from "../../../constants/breakpoints";
import colors from "../../../constants/colors";
import { HotelData } from "../../../types/DataTypes";
import { FlexColumnBox } from "../../utilityComponents/styledComponents";
import HotelImages from "./hotelImages/HotelImages";
import HotelInformation from "./hotelInformation/HotelInformation";
import RoomCard from "./roomCard/RoomCard";

type Props = { hotel: HotelData };

const CardWrapper = styled(FlexColumnBox)({
  width: "96%",
  margin: "15px 0",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: `0px 8px 12px -8px ${colors.midGrey}`,
  backgroundColor: colors.lightGrey,
});

const HotelHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const HotelCard: FC<Props> = ({ hotel }) => {
  const {
    hotelName,
    hotelAddressFirstLine,
    hotelAddressSecondLine,
    starRating,
    images,
    roomsData,
  } = hotel;

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
      {roomsData.map((room) => {
        return <RoomCard key={room.id} room={room} />;
      })}
    </CardWrapper>
  );
};

export default HotelCard;
