import { render, screen } from "@testing-library/react";
import { roomsMockArray } from "../../../mocks/roomsMockArray";
import HotelCard from "./HotelCard";

describe("HotelCard", () => {
  const defaultProps = {
    hotel: {
      id: "H01",
      hotelName: "Hotel",
      hotelAddressFirstLine: "address",
      hotelAddressSecondLine: "and second line",
      starRating: 4,
      images: [{ url: "url", alt: "alt" }],
      roomsData: roomsMockArray,
    },
  };

  it("should render HotelInformation", () => {
    render(<HotelCard {...defaultProps} />);
    const foundElement = screen.getByText("Hotel");
    expect(foundElement).toBeInTheDocument();
  });

  it("should render correct Rating", () => {
    render(<HotelCard {...defaultProps} />);
    const foundElements = screen.getAllByTestId("StarIcon");
    expect(foundElements).toHaveLength(4);
  });

  it("should render 3 rooms if there are 3 rooms in roomsData", () => {
    render(<HotelCard {...defaultProps} />);
    const foundElements = screen.getAllByTestId("RoomCard");
    expect(foundElements).toHaveLength(3);
  });
});
