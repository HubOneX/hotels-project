import { render, screen } from "@testing-library/react";
import HotelCard from "./HotelCard";

describe("HotelCard", () => {
  it("should render HotelInformation", () => {
    render(
      <HotelCard
        hotelName="Hotel"
        hotelAddressFirstLine="address"
        hotelAddressSecondLine="and second line"
        starRating={3}
      />
    );
    const foundElement = screen.getByText("Hotel");
    expect(foundElement).toBeInTheDocument();
  });

  it("should render correct Rating", () => {
    render(
      <HotelCard
        hotelName="Hotel"
        hotelAddressFirstLine="address"
        hotelAddressSecondLine="and second line"
        starRating={3}
      />
    );
    const foundElements = screen.getAllByTestId("StarIcon");
    expect(foundElements).toHaveLength(3);
  });
});
