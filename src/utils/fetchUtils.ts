import axios from "axios";
import urls from "../constants/urls";

const fetchHotelData = async () => {
  let hotelData;
  await axios
    .get(urls.fetchHotelsDataUrl)
    .then((response) => {
      hotelData = response.data;
    })
    .catch((error) => console.error(error));

  return hotelData;
};

const fetchRoomsDataForHotelId = async (id: string) => {
  let roomsData;
  await axios
    .get(urls.fetchHotelRoomsDataUrl + id)
    .then((response) => {
      roomsData = response.data;
    })
    .catch((error) => console.error(error));

  return roomsData;
};

const fetchUtils = { fetchHotelData, fetchRoomsDataForHotelId };

export default fetchUtils;
