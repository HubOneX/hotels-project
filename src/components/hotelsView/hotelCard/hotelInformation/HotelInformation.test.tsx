import React from "react";
import HotelInformation from "./HotelInformation";
import renderer from "react-test-renderer";

describe("HotelInformation", () => {
  const defaultProps = {
    hotelName: "Bayview Hotel",
    hotelAddressFirstLine: "Los Angeles",
    hotelAddressSecondLine: "Beverly Hills 90210",
    starRating: 4,
  };

  it("should match the snapshot", () => {
    const container = renderer.create(<HotelInformation {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
