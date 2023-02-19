import { fireEvent, render, screen } from "@testing-library/react";
import FiltersMenu from "./FiltersMenu";
import renderer from "react-test-renderer";

describe("FiltersMenu", () => {
  const defaultProps = {
    rating: 0,
    setRating: jest.fn(),
    adultsCount: 0,
    setAdultsCount: jest.fn(),
    childrenCount: 0,
    setChildrenCount: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should match the snapshot", () => {
    const container = renderer.create(<FiltersMenu {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  it("should change star rating value on unchecked star click", () => {
    const setRatingMock = jest.fn();

    render(<FiltersMenu {...defaultProps} setRating={setRatingMock} />);

    //MUI test id for unchecked star
    const starRating = screen.getAllByTestId("StarBorderIcon")[3];

    fireEvent.click(starRating);

    expect(setRatingMock).toBeCalledWith(4);
  });

  it("should not change star rating value on checked star click", () => {
    const setRatingMock = jest.fn();

    render(
      <FiltersMenu {...defaultProps} rating={3} setRating={setRatingMock} />
    );

    //MUI test id for checked star
    const starRating = screen.getAllByTestId("StarIcon")[2];

    fireEvent.click(starRating);

    expect(setRatingMock).not.toBeCalled();
  });
});
