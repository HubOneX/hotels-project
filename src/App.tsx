import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppContainer from "./components/appContainer/AppContainer";
import HotelsView from "./components/hotelsView/HotelsView";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";
import { HotelData } from "./types/HotelTypes";
import Loader from "./components/loader/Loader";
import useFetchHotels from "./hooks/useFetchHotels";

function App() {
  const [hotelsData, setHotelsData] = useState<HotelData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { fetchHotels } = useFetchHotels(setHotelsData);

  useEffect(() => {
    fetchHotels();
  }, []);

  useEffect(() => {
    if (!hotelsData) return;

    setIsLoading(false);
  }, [hotelsData]);

  return (
    <ThemeProvider theme={lightTheme}>
      <AppContainer>
        {isLoading ? (
          <Loader data-testid="Loader" />
        ) : (
          <>
            <Box sx={{ backgroundColor: "red", width: "100%" }}>
              <Typography>This is a Hero</Typography>
            </Box>
            <HotelsView hotelsData={hotelsData} data-testid="HotelView" />
          </>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
