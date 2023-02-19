import urls from "../../constants/urls";
import { HotelData } from "../../types/DataTypes";
import fetchUtils from "../../utils/fetchUtils";

const useFetchHotels = () => {
  const parseFetchedHotelsData = (fetchedHotels: any) => {
    if (!fetchedHotels || fetchedHotels.length === 0) return [];

    return fetchedHotels.map((hotel: any) => {
      return {
        id: hotel.id,
        hotelName: hotel.name,
        hotelAddressFirstLine: hotel.address1,
        hotelAddressSecondLine: hotel.address2,
        starRating: hotel.starRating,
        images: hotel.images,
        roomsData: [],
      };
    });
  };

  const parseFetchedRoomsData = (fetchedRooms: any) => {
    if (!fetchedRooms || !fetchedRooms.rooms) return [];

    return fetchedRooms.rooms.map((room: any) => {
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
  };

  const fetchRoomsForSingularHotel = async (hotelId: string) => {
    const fetchedRooms = await fetchUtils.fetchAndParseToJson(
      urls.fetchHotelRoomsDataUrl + hotelId
    );

    return parseFetchedRoomsData(fetchedRooms);
  };

  const fetchRoomsForAllHotels = async (hotels: HotelData[]) => {
    for (const hotel of hotels) {
      hotel.roomsData = await fetchRoomsForSingularHotel(hotel.id);
    }
  };

  const fetchHotels = async () => {
    const fetchedHotels = await fetchUtils.fetchAndParseToJson(
      urls.fetchHotelsDataUrl
    );

    const parsedHotels = parseFetchedHotelsData(fetchedHotels);

    await fetchRoomsForAllHotels(parsedHotels);

    return parsedHotels;
  };

  const _forTestsOnly = {
    parseFetchedHotelsData,
    parseFetchedRoomsData,
    fetchRoomsForSingularHotel,
    fetchRoomsForAllHotels,
  };

  return { fetchHotels, _forTestsOnly };
};

export default useFetchHotels;
