import styled from "@emotion/styled";
import { Box, Divider, Rating } from "@mui/material";
import React, { FC } from "react";
import colors from "../../../constants/colors";
import { HotelData } from "../../../types/HotelTypes";
import HotelInformation from "./hotelInformation/HotelInformation";
import RoomCard from "./roomCard/RoomCard";

// type Props = {
//   hotelName: string;
//   hotelAddressFirstLine: string;
//   hotelAddressSecondLine: string;
//   starRating: number;
// };

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
  id,
  hotelName,
  hotelAddressFirstLine,
  hotelAddressSecondLine,
  starRating,
  roomsData,
}) => {
  return (
    <CardWrapper data-testid="HotelCard" key={id}>
      <HotelHeader>
        <Box
          sx={{ width: "250px", height: "150px", backgroundColor: "yellow" }}
        >
          Image Placeholder
        </Box>
        <HotelInformation
          hotelName={hotelName}
          hotelAddressFirstLine={hotelAddressFirstLine}
          hotelAddressSecondLine={hotelAddressSecondLine}
          starRating={starRating}
        />
      </HotelHeader>
      {roomsData.map((room) => {
        return (
          <>
            <Divider  sx={{ margin: '10px 0' }} />
            <RoomCard
              id={room.id}
              name={room.name}
              longDescription={room.longDescription}
              occupancy={room.occupancy}
            />
          </>
        );
      })}
    </CardWrapper>
  );
};

export default HotelCard;
