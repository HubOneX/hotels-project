import { render, screen } from "@testing-library/react";
import React from "react";
import HotelInformation from "./HotelInformation";

describe("HotelInformation", () => {
  const expectedText = "expected text";

  const checkIfSingularElementExists = () => {
    const foundElements = screen.getAllByText(expectedText);
    expect(foundElements).toHaveLength(1);
  };

  it("should render hotel name", () => {
    render(
      <HotelInformation
        hotelName={expectedText}
        hotelAddressFirstLine=""
        hotelAddressSecondLine=""
        starRating={3}
      />
    );
    checkIfSingularElementExists();
  });

  it("should render address line 1", () => {
    render(
      <HotelInformation
        hotelName=""
        hotelAddressFirstLine={expectedText}
        hotelAddressSecondLine=""
        starRating={3}
      />
    );
    checkIfSingularElementExists();
  });

  it("should render address line 2", () => {
    render(
      <HotelInformation
        hotelName=""
        hotelAddressFirstLine=""
        hotelAddressSecondLine={expectedText}
        starRating={3}
      />
    );
    checkIfSingularElementExists();
  });
});
