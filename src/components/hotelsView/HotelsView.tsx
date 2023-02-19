import styled from "@emotion/styled";
import React, { FC } from "react";
import { HotelData } from "../../types/DataTypes";
import { FlexColumnContainer } from "../utilityComponents/styledComponents";
import HotelCard from "./hotelCard/HotelCard";
import NoHotelsFoundInfo from "./hotelCard/noHotelsFoundInfo/NoHotelsFoundInfo";

type Props = { hotelsData: HotelData[]; isInitialLoad: boolean };

const HotelsContainer = styled(FlexColumnContainer)({
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  minHeight: "50vh",
});

const HotelsView: FC<Props> = ({ hotelsData, isInitialLoad }) => {
  const shouldNoHotelsFoundRender = hotelsData.length === 0 && !isInitialLoad;

  return (
    <HotelsContainer sx={{ marginTop: { xs: "-45px", sm: "10px" } }}>
      {shouldNoHotelsFoundRender ? (
        <NoHotelsFoundInfo />
      ) : (
        hotelsData.map((hotel) => {
          return <HotelCard hotel={hotel} key={hotel.id} />;
        })
      )}
    </HotelsContainer>
  );
};

export default HotelsView;
