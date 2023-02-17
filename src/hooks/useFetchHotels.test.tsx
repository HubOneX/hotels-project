import { HotelData } from "../types/DataTypes";
import fetchUtils from "../utils/fetchUtils";
import useFetchHotels from "./useFetchHotels";

describe("useFetchHotels", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockRoomsData = {
    rooms: [
      {
        id: "R01",
        name: "Room",
        longDescription: "description",
        occupancy: {
          maxAdults: 2,
          maxChildren: 1,
          maxOverall: 3,
        },
      },
    ],
  };

  const mockParsedRoomsData =
    '[{"id":"R01","name":"Room","longDescription":"description","occupancy":{"maxAdults":2,"maxChildren":1,"maxOverall":3}}]';

  const mockHotelsData = [
    {
      id: "H01",
      name: "Hotel",
      address1: "addr",
      address2: "ess",
      starRating: 4,
    },
  ];

  const mockParsedHotelsData =
    '[{"id":"H01","hotelName":"Hotel","hotelAddressFirstLine":"addr","hotelAddressSecondLine":"ess","starRating":4,"roomsData":[]}]';

  describe("parseFetchedHotelsData", () => {
    it("should parse fetched hotels data", () => {
      const { _forTestsOnly } = useFetchHotels();
      const parsedHotels = _forTestsOnly.parseFetchedHotelsData(mockHotelsData);
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
        .spyOn(fetchUtils, "fetchAndParseToJson")
        .mockReturnValue(Promise.resolve(mockRoomsData));
      const { _forTestsOnly } = useFetchHotels();
      const parsedRooms = await _forTestsOnly.fetchRoomsForSingularHotel("id");

      expect(JSON.stringify(parsedRooms)).toEqual(mockParsedRoomsData);
    });
  });

  describe("fetchRoomsForAllHotels", () => {
    it("should call fetchAndParseToJson X times", async () => {
      const fetchAndParseSpy = jest
        .spyOn(fetchUtils, "fetchAndParseToJson")
        .mockImplementation();
      const { _forTestsOnly } = useFetchHotels();
      await _forTestsOnly.fetchRoomsForAllHotels([
        { id: "1" } as HotelData,
        { id: "2" } as HotelData,
      ]);

      expect(fetchAndParseSpy).toBeCalledTimes(2);
    });
  });

  describe("fetchHotels", () => {
    it("should return parsed hotels data", async () => {
      jest
        .spyOn(fetchUtils, "fetchAndParseToJson")
        .mockReturnValue(Promise.resolve(mockHotelsData));
      const { fetchHotels } = useFetchHotels();
      const result = await fetchHotels();
      expect(JSON.stringify(result)).toEqual(mockParsedHotelsData);
    });
  });
});
