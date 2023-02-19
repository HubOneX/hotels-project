import { render, screen } from "@testing-library/react";
import { hotelsMockArray } from "../../mocks/hotelsMockArray";
import HotelsView from "./HotelsView";

describe("HotelsView", () => {
  describe("on initial load", () => {
    it("should render 3 HotelCards when data for 3 cards is provided", () => {
      render(<HotelsView hotelsData={hotelsMockArray} isInitialLoad />);

      const foundCards = screen.getAllByTestId("HotelCard");
      expect(foundCards).toHaveLength(3);
    });

    it("should not render info text if there is no data provided", () => {
      render(<HotelsView hotelsData={[]} isInitialLoad />);

      const foundCards = screen.queryAllByTestId("HotelCard");
      expect(foundCards).toHaveLength(0);

      const noHotelsInfo = screen.queryByTestId("NoHotelsInfo");
      expect(noHotelsInfo).not.toBeInTheDocument();
    });
  });

  describe("on not initial load", () => {
    it("should render 3 HotelCards when data for 3 cards is provided", () => {
      render(<HotelsView hotelsData={hotelsMockArray} isInitialLoad={false} />);

      const foundCards = screen.getAllByTestId("HotelCard");
      expect(foundCards).toHaveLength(3);
    });

    it("should render info text if there is no data provided", () => {
      render(<HotelsView hotelsData={[]} isInitialLoad={false} />);

      const foundCards = screen.queryAllByTestId("HotelCard");
      expect(foundCards).toHaveLength(0);

      const noHotelsInfo = screen.getByTestId("NoHotelsInfo");
      expect(noHotelsInfo).toBeInTheDocument();
    });
  });
});
