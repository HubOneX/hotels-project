import RoomCard from "./RoomCard";
import renderer from "react-test-renderer";

const defaultProps = {
  room: {
    id: "R01",
    name: "Room",
    longDescription: "description",
    occupancy: {
      maxAdults: 2,
      maxChildren: 1,
      maxOverall: 3,
    },
  },
};

describe("RoomCard", () => {
  it("should match the snapshot", () => {
    const container = renderer.create(<RoomCard {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
