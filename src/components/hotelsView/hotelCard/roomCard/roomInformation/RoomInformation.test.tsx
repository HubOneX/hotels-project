import RoomInformation from "./RoomInformation";
import renderer from "react-test-renderer";

describe("RoomInformation", () => {
  const defaultProps = {
    name: "Room",
    occupancy: {
      maxAdults: 2,
      maxChildren: 1,
      maxOverall: 3,
    },
  };
  it("should match the snapshot", () => {
    const container = renderer.create(<RoomInformation {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
