import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import useFetchHotels from "./hooks/useFetchHotels/useFetchHotels";
import { hotelsMockResponse } from "./mocks/hotelsMockResponse";
import { roomsMockResponse } from "./mocks/roomsMockResponse";
import renderer from "react-test-renderer";

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

  it("should render loader when without data and is initial load", async () => {
    const container = renderer.create(<App />);

    await waitFor(() => {
      //'Loading data...' is part of a Loader component
      expect(JSON.stringify(container.toJSON())).toContain("Loading data...");
    });
  });

  it("should render a card in hotels view when updated with hotels data", async () => {
    const container = renderer.create(<App />);

    await waitFor(() => {
      //'HotelCard' is a testing id of a card in HotelsView component
      expect(JSON.stringify(container.toJSON())).toContain("HotelCard");
    });
  });

  it("should render a footer", async () => {
    const container = renderer.create(<App />);

    await waitFor(() => {
      //'Made by ' is part of a Footer commponent
      expect(JSON.stringify(container.toJSON())).toContain("Made by ");
    });
  });
});
