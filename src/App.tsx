import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppContainer from "./components/appContainer/AppContainer";
import HotelsView from "./components/hotelsView/HotelsView";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";
import { HotelData } from "./types/HotelTypes";
import Loader from "./components/loader/Loader";
import useFetchHotels from "./hooks/useFetchHotels";
import FiltersMenu from "./components/filtersMenu/FiltersMenu";

function App() {
  const [hotelsData, setHotelsData] = useState<HotelData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //TODO: create custom hook for managing this state and returning filtered data
  const [rating, setRating] = useState<number>(0);
  const [adultsCount, setAdultsCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);

  const [filteredHotelsData, setFilteredHotelsData] = useState<HotelData[]>([]);

  const { fetchHotels } = useFetchHotels(setHotelsData);

  useEffect(() => {
    fetchHotels();
  }, []);

  useEffect(() => {
    if (!hotelsData) return;
    setFilteredHotelsData(hotelsData);
    setIsLoading(false);
  }, [hotelsData]);

  useEffect(() => {
    if (rating === 0) return;
    console.log(rating);
    const filteredByStars = hotelsData.filter(
      (hotel) => hotel.starRating >= rating
    );
    console.log(rating, filteredByStars);

    setFilteredHotelsData(filteredByStars);
  }, [rating]);

  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        {isLoading ? (
          <Loader data-testid="Loader" />
        ) : (
          <>
            <Box
              sx={{
                backgroundColor: "lightblue",
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
