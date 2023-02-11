import React from "react";
import { render, screen } from "@testing-library/react";
import HotelsContainer from "./HotelsContainer";

describe("HotelsContainer", () => {
  it("should render provided Children", () => {
    const pChild = <p>This is a child</p>;
    render(<HotelsContainer>{pChild}</HotelsContainer>);
    const foundChild = screen.getByText("This is a child");
    expect(foundChild).toBeInTheDocument();
  });
});
