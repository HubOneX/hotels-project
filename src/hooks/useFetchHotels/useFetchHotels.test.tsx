import { hotelsMockResponse } from "../../mocks/hotelsMockResponse";
import { roomsMockResponse } from "../../mocks/roomsMockResponse";
import { HotelData } from "../../types/DataTypes";
import fetchUtils from "../../utils/fetchUtils";
import useFetchHotels from "./useFetchHotels";

describe("useFetchHotels", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockRoomsData = {
    rooms: roomsMockResponse,
  };

  const mockParsedRoomsData =
    '[{"id":"id2","name":"room name","longDescription":"desscription","occupancy":{"maxAdults":2,"maxChildren":1,"maxOverall":3}}]';

  const mockParsedHotelsData =
    '[{"id":"id1","hotelName":"hotel name","hotelAddressFirstLine":"add","hotelAddressSecondLine":"ress","starRating":2,"images":[{"url":"url","alt":"alt"}],"roomsData":[]}]';

  describe("parseFetchedHotelsData", () => {
    it("should parse fetched hotels data", () => {
      const { _forTestsOnly } = useFetchHotels();
      const parsedHotels =
        _forTestsOnly.parseFetchedHotelsData(hotelsMockResponse);
      expect(JSON.stringify(parsedHotels)).toEqual(mockParsedHotelsData);
    });

    it("should return empty array if fetchedHotels is null", () => {
      const { _forTestsOnly } = useFetchHotels();
      const parsedHotels = _forTestsOnly.parseFetchedHotelsData(null);
      expect(JSON.stringify(parsedHotels)).toEqual("[]");
    });

    it("should return empty array if fetchedHotels is empty", () => {
      const { _forTestsOnly } = useFetchHotels();
      const parsedHotels = _forTestsOnly.parseFetchedHotelsData([]);
      expect(JSON.stringify(parsedHotels)).toEqual("[]");
    });
  });

  describe("parseFetchedRoomsData", () => {
    it("should parse fetched rooms data", () => {
      const { _forTestsOnly } = useFetchHotels();
      const parsedHotels = _forTestsOnly.parseFetchedRoomsData(mockRoomsData);
      expect(JSON.stringify(parsedHotels)).toEqual(mockParsedRoomsData);
    });

    it("should return empty array if fetchedRooms is null", () => {
      const { _forTestsOnly } = useFetchHotels();
      const parsedHotels = _forTestsOnly.parseFetchedRoomsData(null);
      expect(JSON.stringify(parsedHotels)).toEqual("[]");
    });

    it("should return empty array if fetchedRooms is empty", () => {
      const { _forTestsOnly } = useFetchHotels();
      const parsedHotels = _forTestsOnly.parseFetchedRoomsData({});
      expect(JSON.stringify(parsedHotels)).toEqual("[]");
    });

    it("should return empty array if fetchedRooms' array rooms is empty", () => {
      const { _forTestsOnly } = useFetchHotels();
      const parsedHotels = _forTestsOnly.parseFetchedRoomsData({ rooms: [] });
      expect(JSON.stringify(parsedHotels)).toEqual("[]");
    });
  });

  describe("fetchRoomsForSingularHotel", () => {
    it("should return parsed rooms data for singular hotel", async () => {
      jest
        .spyOn(fetchUtils, "fetchRoomsDataForHotelId")
        //@ts-ignore
        .mockReturnValue(Promise.resolve(mockRoomsData));
      const { _forTestsOnly } = useFetchHotels();
      const parsedRooms = await _forTestsOnly.fetchRoomsForSingularHotel("id");

      expect(JSON.stringify(parsedRooms)).toEqual(mockParsedRoomsData);
    });
  });

  describe("fetchRoomsForAllHotels", () => {
    it("should call fetchAndParseToJson X times", async () => {
      const fetchRoomsDataForHotelIdSpy = jest
        .spyOn(fetchUtils, "fetchRoomsDataForHotelId")
        .mockImplementation();
      const { _forTestsOnly } = useFetchHotels();
      await _forTestsOnly.fetchRoomsForAllHotels([
        { id: "1" } as HotelData,
        { id: "2" } as HotelData,
      ]);

      expect(fetchRoomsDataForHotelIdSpy).toBeCalledTimes(2);
    });
  });

  describe("fetchHotels", () => {
    it("should return parsed hotels data", async () => {
      jest
        .spyOn(fetchUtils, "fetchHotelData")
        //@ts-ignore
        .mockReturnValue(Promise.resolve(hotelsMockResponse));
      const { fetchHotels } = useFetchHotels();
      const result = await fetchHotels();
      expect(JSON.stringify(result)).toEqual(mockParsedHotelsData);
    });
  });
});
