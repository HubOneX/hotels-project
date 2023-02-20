import fetchUtils from "./fetchUtils";
import urls from "../constants/urls";
import axios, { AxiosResponse } from "axios";
import { hotelsMockResponse } from "../mocks/hotelsMockResponse";
import { roomsMockResponse } from "../mocks/roomsMockResponse";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchUtils", () => {
  let errorSpy: jest.SpyInstance<void>;

  beforeEach(() => {
    errorSpy = jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchHotelData", () => {
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
      expect(errorSpy).toHaveBeenCalled();
      expect(result).toEqual(undefined);
    });
  });

  describe("fetchRoomsDataForHotelId", () => {
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
      expect(errorSpy).toHaveBeenCalled();
      expect(result).toEqual(undefined);
    });
  });
});
