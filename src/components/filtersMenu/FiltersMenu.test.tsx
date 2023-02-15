import { fireEvent, render, screen } from "@testing-library/react";
import FiltersMenu from "./FiltersMenu";

describe("FiltersMenu", () => {
  it("should render correctly", () => {
    render(
      <FiltersMenu
        rating={0}
        setRating={jest.fn()}
        adultsCount={0}
        setAdultsCount={jest.fn()}
        childrenCount={0}
        setChildrenCount={jest.fn()}
      />
    );

    const foundAdultFilter = screen.getByText("Adults:");
    const foundChildrenFilter = screen.getByText("Children:");
    const foundStarRating = screen.getByTestId("StarRatingFilter");

    expect(foundAdultFilter).toBeInTheDocument();
    expect(foundChildrenFilter).toBeInTheDocument();
    expect(foundStarRating).toBeInTheDocument();
  });

  it("should change star rating value on unchecked star click", () => {
    const setRatingMock = jest.fn();

    render(
      <FiltersMenu
        rating={0}
        setRating={setRatingMock}
        adultsCount={0}
        setAdultsCount={jest.fn()}
        childrenCount={0}
        setChildrenCount={jest.fn()}
      />
    );

    //MUI test id for unchecked star
    const starRating = screen.getAllByTestId("StarBorderIcon")[3];

    fireEvent.click(starRating);

    expect(setRatingMock).toBeCalledWith(4);
  });

  it("should not change star rating value on change", () => {
    const setRatingMock = jest.fn();

    render(
      <FiltersMenu
        rating={3}
        setRating={setRatingMock}
        adultsCount={0}
        setAdultsCount={jest.fn()}
        childrenCount={0}
        setChildrenCount={jest.fn()}
      />
    );

    //MUI test id for checked star
    const starRating = screen.getAllByTestId("StarIcon")[2];

    fireEvent.click(starRating);

    expect(setRatingMock).not.toBeCalled();
  });
});
