import { render, screen } from "@testing-library/react";
import { RoomData } from "../../../../types/HotelTypes";
import RoomCard from "./RoomCard";

const defaultProps: RoomData = {
  id: "R01",
  name: "Room",
  longDescription: "description",
  occupancy: {
    maxAdutls: 2,
    maxChildren: 1,
    maxOverall: 3,
  },
};

describe("RoomCard", () => {
  it("should render room name", () => {
    render(<RoomCard {...defaultProps} />);
    const foundElement = screen.getByText("Room");
    expect(foundElement).toBeInTheDocument();
  });

  it("should render room description", () => {
    render(<RoomCard {...defaultProps} />);
    const foundElement = screen.getByText("description");
    expect(foundElement).toBeInTheDocument();
  });

  it("should render adults occupancy", () => {
    render(<RoomCard {...defaultProps} />);
    const foundElement = screen.getByText("Adults: 2");
    expect(foundElement).toBeInTheDocument();
  });

  it("should render children occupancy", () => {
    render(<RoomCard {...defaultProps} />);
    const foundElement = screen.getByText("Children: 1");
    expect(foundElement).toBeInTheDocument();
  });
});
