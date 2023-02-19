import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import useFetchHotels from "./hooks/useFetchHotels/useFetchHotels";
import { hotelsMockResponse } from "./mocks/hotelsMockResponse";
import { roomsMockResponse } from "./mocks/roomsMockResponse";

jest.mock("./hooks/useFetchHotels/useFetchHotels.tsx", () => jest.fn());
describe("App", () => {
  beforeEach(() => {
    //@ts-ignore
    useFetchHotels.mockImplementation(() => ({
      fetchHotels: () => {
        return [{ ...hotelsMockResponse[0], roomsData: roomsMockResponse }];
      },
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render Hero", async () => {
    render(<App />);
    const foundElement = await screen.findByText("HotelsFindr");
    expect(foundElement).toBeInTheDocument();
  });

  it("should not render hotels view when without data", async () => {
    render(<App />);
    let foundElements;
    await waitFor(() => {
      foundElements = screen.queryByTestId("HotelView");
    });
    expect(foundElements).not.toBeInTheDocument();
  });

  it.todo("should render hotels view when with data");
});
