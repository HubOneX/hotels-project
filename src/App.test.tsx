import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render Hero", () => {
    render(<App />);
    const foundElement = screen.getByText("This is a Hero");
    expect(foundElement).toBeInTheDocument();
  });

  it("should not render hotels view when without data", () => {
    render(<App />);
    const foundElements = screen.queryByTestId("HotelView");
    expect(foundElements).not.toBeInTheDocument();
  });

  it.todo("should render hotels view when with datas");
});
