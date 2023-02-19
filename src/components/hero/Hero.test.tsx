import React from "react";
import renderer from "react-test-renderer";
import Hero from "./Hero";

describe("Hero", () => {
  it("should match the snapshot", () => {
    const container = renderer.create(<Hero />);

    expect(container).toMatchSnapshot();
  });
});
