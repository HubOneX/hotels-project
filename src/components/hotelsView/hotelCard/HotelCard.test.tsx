import { render, screen } from "@testing-library/react";
import { roomsMockArray } from "../../../mocks/roomsMockArray";
import HotelCard from "./HotelCard";

describe("HotelCard", () => {
  it("should render HotelInformation", () => {
    render(
      <HotelCard
        id="H01"
        hotelName="Hotel"
        hotelAddressFirstLine="address"
        hotelAddressSecondLine="and second line"
        starRating={3}
        roomsData={roomsMockArray}
        />
        );
        const foundElement = screen.getByText("Hotel");
    expect(foundElement).toBeInTheDocument();
  });

  it("should render correct Rating", () => {
    render(
      <HotelCard
        id="H01"
        hotelName="Hotel"
        hotelAddressFirstLine="address"
        hotelAddressSecondLine="and second line"
        starRating={3}
        roomsData={roomsMockArray}
      />
    );
    const foundElements = screen.getAllByTestId("StarIcon");
    expect(foundElements).toHaveLength(3);
  });
});
