import styled from "@emotion/styled";
import React, { FC } from "react";
import breakpoints from "../../constants/breakpoints";
import { HotelData } from "../../types/DataTypes";
import { FlexColumnContainer } from "../utilityComponents/styledComponents";
import HotelCard from "./hotelCard/HotelCard";
import NoHotelsFoundInfo from "./hotelCard/noHotelsFoundInfo/NoHotelsFoundInfo";

type Props = { hotelsData: HotelData[]; isInitialLoad: boolean };

const HotelsContainer = styled(FlexColumnContainer)`
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-height: 50vh;
  margin-top: 10px;

  @media (max-width: ${breakpoints.sm}px) {
    margin-top: -45px;
  }
`;

const HotelsView: FC<Props> = ({ hotelsData, isInitialLoad }) => {
  const shouldNoHotelsFoundRender = hotelsData.length === 0 && !isInitialLoad;

  return (
    <HotelsContainer>
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
