import React, { useEffect, useState } from "react";
import HotelsView from "./components/hotelsView/HotelsView";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";
import { HotelData } from "./types/DataTypes";
import Loader from "./components/loader/Loader";
import useFetchHotels from "./hooks/useFetchHotels/useFetchHotels";
import FiltersMenu from "./components/filtersMenu/FiltersMenu";
import useRoomFilters from "./hooks/useRoomFilters/useRoomFilters";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import styled from "@emotion/styled";
import { FlexColumnContainer } from "./components/utilityComponents/styledComponents";

const AppContainer = styled(FlexColumnContainer)({
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "100% !important",
  padding: "0 !important",
});

function App() {
  const [hotelsData, setHotelsData] = useState<HotelData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  const [rating, setRating] = useState<number>(0);
  const [adultsCount, setAdultsCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);

  const [filteredHotelsData, setFilteredHotelsData] = useState<HotelData[]>([]);
  const { fetchHotels } = useFetchHotels();
  const { filterRooms } = useRoomFilters(
    hotelsData,
    rating,
    adultsCount,
    childrenCount
  );

  const isFooterFixedAtBottom = !hotelsData || filteredHotelsData.length === 0;

  const setFetchedHotels = async () => {
    const fetchedHotelsData = await fetchHotels();
    setHotelsData(fetchedHotelsData);
  };

  useEffect(() => {
    setFetchedHotels();
  }, []);

  useEffect(() => {
    if (!hotelsData) return;
    setFilteredHotelsData(hotelsData);
    setIsLoading(false);

    if (hotelsData.length === 0) return;
    setIsInitialLoad(false);
  }, [hotelsData]);

  useEffect(() => {
    setFilteredHotelsData(filterRooms());
  }, [rating, adultsCount, childrenCount]);

  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        <Hero />
        <FiltersMenu
          rating={rating}
          setRating={setRating}
          adultsCount={adultsCount}
          setAdultsCount={setAdultsCount}
          childrenCount={childrenCount}
          setChildrenCount={setChildrenCount}
        />
        {isLoading ? (
          <Loader data-testid="Loader" />
        ) : (
          <HotelsView
            hotelsData={filteredHotelsData}
            isInitialLoad={isInitialLoad}
            data-testid="HotelView"
          />
        )}
        <Footer fixedAtBottom={isFooterFixedAtBottom} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
