import { hotelsMockArray } from "../../mocks/hotelsMockArray";
import useRoomFilters from "./useRoomFilters";

describe("useRoomFilters", () => {
  describe("filterByStars", () => {
    it("should return the same array if rating = 0 and other arguments are 0", () => {
      const { _forTestsOnly } = useRoomFilters(hotelsMockArray, 0, 0, 0);
      const result = _forTestsOnly.filterByStars(hotelsMockArray);
      expect(result).toHaveLength(3);
    });

    it("should return filtered data", () => {
      const { _forTestsOnly } = useRoomFilters(hotelsMockArray, 3, 0, 0);
      const result = _forTestsOnly.filterByStars(hotelsMockArray);
      expect(result).toHaveLength(2);
    });
  });

  describe("filterByAdults", () => {
    it("should return the same array if adultsCount = 0 and other arguments are 0", () => {
      const { _forTestsOnly } = useRoomFilters(hotelsMockArray, 0, 0, 0);
      const result = _forTestsOnly.filterByAdults(hotelsMockArray);
      expect(result[0].roomsData).toHaveLength(3);
    });

    it("should return filtered data", () => {
      const { _forTestsOnly } = useRoomFilters(hotelsMockArray, 0, 2, 0);
      const result = _forTestsOnly.filterByAdults(hotelsMockArray);
      expect(result[0].roomsData).toHaveLength(2);
    });
  });

  describe("filterByChildren", () => {
    it("should return the same array if childrenCount = 0 and other arguments are 0", () => {
      const { _forTestsOnly } = useRoomFilters(hotelsMockArray, 0, 0, 0);
      const result = _forTestsOnly.filterByChildren(hotelsMockArray);
      expect(result[0].roomsData).toHaveLength(3);
    });

    it("should return filtered data", () => {
      const { _forTestsOnly } = useRoomFilters(hotelsMockArray, 0, 0, 1);
      const result = _forTestsOnly.filterByChildren(hotelsMockArray);
      expect(result[0].roomsData).toHaveLength(1);
    });
  });

  describe("filterRooms", () => {
    it("should return the same array if all arguments are 0", () => {
      const { filterRooms } = useRoomFilters(hotelsMockArray, 0, 0, 0);
      const result = filterRooms();
      expect(result).toHaveLength(3);
      expect(result[0].roomsData).toHaveLength(3);
    });

    it("should return the filtered array", () => {
      const { filterRooms } = useRoomFilters(hotelsMockArray, 3, 2, 3);
      const result = filterRooms();
      expect(result).toHaveLength(1);
      expect(result[0].roomsData).toHaveLength(1);
    });
  });
});
