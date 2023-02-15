import fetchUtils from "./fetchUtils";

describe("fetchUtils", () => {
  describe("fetchAndParseToJson", () => {
    it("should call fetch and parse to JSON", async () => {
      const jsonSpy = jest.fn();
      const fetchSpy = jest.spyOn(global, "fetch").mockResolvedValue({
        json: jsonSpy,
      } as unknown as Response);
      await fetchUtils.fetchAndParseToJson("url");
      expect(fetchSpy).toBeCalledWith("url");
      expect(jsonSpy).toBeCalled();
    });
  });
});
