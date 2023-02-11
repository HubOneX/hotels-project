import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render Hero", () => {
    render(<App />);
    const foundElement = screen.getByText("This is a Hero");
    expect(foundElement).toBeInTheDocument();
  });

  it("should render hotels view", () => {
    render(<App />);
    const foundElement = screen.getByText("This is Hotels View");
    expect(foundElement).toBeInTheDocument();
  });
});
