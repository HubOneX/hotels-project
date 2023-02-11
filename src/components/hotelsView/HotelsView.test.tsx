import { render, screen } from "@testing-library/react";
import { hotelsMockArray } from "../../mocks/hotelsMockArray";
import HotelsView from "./HotelsView";

describe("HotelsView", () => {
  it("should render 3 HotelCards when data for 3 cards is provided", () => {
    render(<HotelsView hotelsData={hotelsMockArray} />);
    const foundCards = screen.getAllByTestId("HotelCard");
    expect(foundCards).toHaveLength(3);
  });
});
