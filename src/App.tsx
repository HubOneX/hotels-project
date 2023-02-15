import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppContainer from "./components/appContainer/AppContainer";
import HotelsView from "./components/hotelsView/HotelsView";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";
import { HotelData } from "./types/DataTypes";
import Loader from "./components/loader/Loader";
import useFetchHotels from "./hooks/useFetchHotels";
import FiltersMenu from "./components/filtersMenu/FiltersMenu";
import useRoomFilters from "./hooks/useRoomFilters";

function App() {
  const [hotelsData, setHotelsData] = useState<HotelData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [rating, setRating] = useState<number>(0);
  const [adultsCount, setAdultsCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);

  const [filteredHotelsData, setFilteredHotelsData] = useState<HotelData[]>([])
  const { fetchHotels } = useFetchHotels(setHotelsData);
  const { filterRooms } = useRoomFilters(
    hotelsData,
    rating,
    adultsCount,
    childrenCount
  );

  useEffect(() => {
    fetchHotels();
  }, []);

  useEffect(() => {
    if (!hotelsData) return;
    setFilteredHotelsData(hotelsData);
    setIsLoading(false);
  }, [hotelsData]);

  useEffect(() => {
    setFilteredHotelsData(filterRooms());
  }, [rating, adultsCount, childrenCount]);

  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>  
        {isLoading ? (
          <Loader data-testid="Loader" />
        ) : (
          <>
            <Box
              sx={{
                backgroundColor: "skyblue",
                width: "100%",
                height: "300px",
              }}
            >
              <Typography>This is a Hero</Typography>
            </Box>
            <FiltersMenu
              rating={rating}
              setRating={setRating}
              adultsCount={adultsCount}
              setAdultsCount={setAdultsCount}
              childrenCount={childrenCount}
              setChildrenCount={setChildrenCount}
            />
            <HotelsView
              hotelsData={filteredHotelsData}
              data-testid="HotelView"
            />
          </>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
