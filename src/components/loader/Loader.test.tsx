import React from "react";
import renderer from "react-test-renderer";
import Loader from "./Loader";

describe("Loader", () => {
  it("should match the snapshot", () => {
    const container = renderer.create(<Loader />);

    expect(container).toMatchSnapshot();
  });
});
