import fetchUtils from "./fetchUtils";
import urls from "../constants/urls";

import axios, { AxiosResponse } from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchUtils", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  describe("fetchHotelData", () => {
    const hotelsMockResponse = [
      {
        id: "id1",
        name: "hotel name",
        address1: "add",
        address2: "ress",
        starRating: 2,
        images: [{ url: "url", alt: "alt" }],
      },
    ];

    it("should return hotels data if no errors", async () => {
      const mockedResponse: AxiosResponse = {
        data: hotelsMockResponse,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      };

      mockedAxios.get.mockResolvedValueOnce(mockedResponse);
      const result = await fetchUtils.fetchHotelData();

      expect(mockedAxios.get).toHaveBeenCalledWith(urls.fetchHotelsDataUrl);
      expect(result).toEqual(hotelsMockResponse);
    });

    it("should log error if occured", async () => {
      const message = "Unauthorized";

      mockedAxios.get.mockRejectedValueOnce(new Error(message));
      const result = await fetchUtils.fetchHotelData();

      expect(mockedAxios.get).toHaveBeenCalledWith(urls.fetchHotelsDataUrl);
      expect(result).toEqual(undefined);
    });
  });

  describe("fetchRoomsDataForHotelId", () => {
    const roomsMockResponse = [
      {
        id: "id2",
        name: "room name",
        longDescription: "desscription",
        occupancy: {
          maxAdults: 2,
          maxChildren: 1,
          maxOverall: 3,
        },
      },
    ];

    it("should return rooms data if no errors", async () => {
      const mockedResponse: AxiosResponse = {
        data: roomsMockResponse,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {},
      };

      mockedAxios.get.mockResolvedValueOnce(mockedResponse);
      const result = await fetchUtils.fetchRoomsDataForHotelId("id1");

      expect(mockedAxios.get).toHaveBeenCalledWith(
        urls.fetchHotelRoomsDataUrl + "id1"
      );
      expect(result).toEqual(roomsMockResponse);
    });

    it("should log error if occured", async () => {
      const message = "Unauthorized";

      mockedAxios.get.mockRejectedValueOnce(new Error(message));
      const result = await fetchUtils.fetchRoomsDataForHotelId("id1");

      expect(mockedAxios.get).toHaveBeenCalledWith(
        urls.fetchHotelRoomsDataUrl + "id1"
      );
      expect(result).toEqual(undefined);
    });
  });
});
