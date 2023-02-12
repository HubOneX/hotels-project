import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppContainer from "./components/appContainer/AppContainer";
import HotelsView from "./components/hotelsView/HotelsView";
import { ThemeProvider } from "@mui/material/styles";
import lightTheme from "./themes/lightTheme";
import { HotelData } from "./types/HotelTypes";
import Loader from "./components/loader/Loader";

function App() {
  const [hotelsData, setHotelsData] = useState<HotelData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const parseFetchedHotelsData = (fetchedHotels: any) => {
    if (!fetchedHotels) return;

    const parsedHotels = fetchedHotels.map((hotel: any) => {
      return {
        id: hotel.id,
        hotelName: hotel.name,
        hotelAddressFirstLine: hotel.address1,
        hotelAddressSecondLine: hotel.address2,
        starRating: hotel.starRating,
        roomsData: [],
      };
    });
    return parsedHotels;
  };

  function parseFetchedRoomsData(fetchedRooms: any) {
    if (!fetchedRooms || !fetchedRooms.rooms) return;

    const parsedRooms = fetchedRooms.rooms.map((room: any) => {
      return {
        id: room.id,
        name: room.name,
        longDescription: room.longDescription,
        occupancy: {
          maxAdults: room.occupancy.maxAdults,
          maxChildren: room.occupancy.maxChildren,
          maxOverall: room.occupancy.maxOverall,
        },
      };
    });

    return parsedRooms;
  }

  const fetchRoomsForSingularHotel = async (hotelId: string) => {
    const fetchedRooms = await (
      await fetch(
        `https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`
      )
    ).json();

    const parsedRooms = parseFetchedRoomsData(fetchedRooms);

    return parsedRooms;
  };

  const fetchRoomsForAllHotels = async (hotels: HotelData[]) => {
    for (const hotel of hotels) {
      hotel.roomsData = await fetchRoomsForSingularHotel(hotel.id);
    }
  };

  const fetchHotels = async () => {
    const fetchedHotels = await (
      await fetch(
        "https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG"
      )
    ).json();

    const parsedHotels = parseFetchedHotelsData(fetchedHotels);

    await fetchRoomsForAllHotels(parsedHotels);

    setHotelsData(parsedHotels);
  };

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
          <Loader />
        ) : (
          <>
            <Box sx={{ backgroundColor: "red", width: "100%" }}>
              <Typography>This is a Hero</Typography>
            </Box>
            <HotelsView hotelsData={hotelsData} />
          </>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
