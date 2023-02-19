import { fireEvent, render, screen } from "@testing-library/react";
import HotelImages from "./HotelImages";

describe("HotelImages", () => {
  const defaultProps = {
    images: [
      { url: "url1", alt: "alt1" },
      { url: "url2", alt: "alt2" },
    ],
  };

  it("should change image to next one if the forward button is clicked and back to first if array ended", () => {
    render(<HotelImages {...defaultProps} />);

    let foundImage1 = screen.queryByAltText("alt1");
    let foundImage2 = screen.queryByAltText("alt2");

    expect(foundImage1).toBeInTheDocument();
    expect(foundImage2).not.toBeInTheDocument();

    const forwardButton = screen.getAllByRole("button")[1];

    fireEvent.click(forwardButton);

    foundImage1 = screen.queryByAltText("alt1");
    foundImage2 = screen.queryByAltText("alt2");

    expect(foundImage1).not.toBeInTheDocument();
    expect(foundImage2).toBeInTheDocument();

    fireEvent.click(forwardButton);

    foundImage1 = screen.queryByAltText("alt1");
    foundImage2 = screen.queryByAltText("alt2");

    expect(foundImage1).toBeInTheDocument();
    expect(foundImage2).not.toBeInTheDocument();
  });

  it("should change image to previous one if the back button is clicked and to last if it was the first image", () => {
    render(<HotelImages {...defaultProps} />);

    let foundImage1 = screen.queryByAltText("alt1");
    let foundImage2 = screen.queryByAltText("alt2");

    expect(foundImage1).toBeInTheDocument();
    expect(foundImage2).not.toBeInTheDocument();

    const backButton = screen.getAllByRole("button")[0];

    fireEvent.click(backButton);

    foundImage1 = screen.queryByAltText("alt1");
    foundImage2 = screen.queryByAltText("alt2");

    expect(foundImage1).not.toBeInTheDocument();
    expect(foundImage2).toBeInTheDocument();

    fireEvent.click(backButton);

    foundImage1 = screen.queryByAltText("alt1");
    foundImage2 = screen.queryByAltText("alt2");

    expect(foundImage1).toBeInTheDocument();
    expect(foundImage2).not.toBeInTheDocument();
  });
});
