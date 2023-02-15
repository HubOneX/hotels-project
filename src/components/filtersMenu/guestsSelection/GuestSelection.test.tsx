import { fireEvent, render, screen } from "@testing-library/react";
import GuestsSelection from "./GuestsSelection";

describe("GuestSelection", () => {
  const setCurrentCountMock = jest.fn();

  it("should increment counter if add button clicked", async () => {
    render(
      <GuestsSelection
        guestType={0}
        currentCount={0}
        setCurrentCount={setCurrentCountMock}
        isAdditionDisabled={false}
      />
    );

    const counter = screen.queryByText("0");
    expect(counter).toBeInTheDocument();

    const addButton = screen.getAllByRole("button")[0];
    await fireEvent.click(addButton);

    expect(setCurrentCountMock).toBeCalledWith(1);
  });

  it("should decrement counter if remove button clicked", async () => {
    render(
      <GuestsSelection
        guestType={0}
        currentCount={3}
        setCurrentCount={setCurrentCountMock}
        isAdditionDisabled={false}
      />
    );
    const counter = screen.queryByText("3");
    expect(counter).toBeInTheDocument();

    const removeButton = screen.getAllByRole("button")[1];
    await fireEvent.click(removeButton);

    expect(setCurrentCountMock).toBeCalledWith(2);
  });

  it("should change the counter to 0 if isAdditionDisabled = true", () => {
    render(
      <GuestsSelection
        guestType={0}
        currentCount={3}
        setCurrentCount={setCurrentCountMock}
        isAdditionDisabled
      />
    );

    expect(setCurrentCountMock).toBeCalledWith(0);
  });
});