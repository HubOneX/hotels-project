import { HotelData } from "../types/HotelTypes";

const useRoomFilters = (
  hotelsData: HotelData[],
  rating: number,
  adultsCount: number,
  childrenCount: number
) => {
  const filterByStars = (filteredData: HotelData[]) => {
    if (rating !== 0) {
      const filteredByStars = hotelsData.filter(
        (hotel) => hotel.starRating >= rating
      );
      filteredData = filteredByStars;
    }
    return filteredData;
  };

  const filterByAdults = (filteredData: HotelData[]) => {
    if (adultsCount !== 0) {
      let filteredByAdults: HotelData[] = [];
      for (const hotel of filteredData) {
        let roomsFilteredByAdults = hotel.roomsData.filter(
          (room) => room.occupancy.maxAdults >= adultsCount
        );

        filteredByAdults = [
          ...filteredByAdults,
          { ...hotel, roomsData: [...roomsFilteredByAdults] },
        ];
      }
      filteredData = filteredByAdults;
    }
    return filteredData;
  };

  const filterByChildren = (filteredData: HotelData[]) => {
    if (childrenCount !== 0) {
      let filteredByChildren: HotelData[] = [];
      for (const hotel of filteredData) {
        let roomsFilteredByChildren = hotel.roomsData.filter(
          (room) => room.occupancy.maxChildren >= childrenCount
        );

        filteredByChildren = [
          ...filteredByChildren,
          { ...hotel, roomsData: [...roomsFilteredByChildren] },
        ];
      }
      filteredData = filteredByChildren;
    }
    return filteredData;
  };

  const filterRooms = () => {
    let filteredData: HotelData[] = hotelsData;

    filteredData = filterByStars(filteredData);
    filteredData = filterByAdults(filteredData);
    filteredData = filterByChildren(filteredData);

    return filteredData.filter((hotel) => hotel.roomsData.length !== 0);
  };

  return { filterRooms };
};

export default useRoomFilters;
