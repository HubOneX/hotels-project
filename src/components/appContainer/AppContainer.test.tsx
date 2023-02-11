import { render, screen } from "@testing-library/react";
import AppContainer from "./AppContainer";

describe("AppContainer", () => {
  it("should render provided Children", () => {
    const pChild = <p>This is a child</p>;
    render(<AppContainer>{pChild}</AppContainer>);
    const foundChild = screen.getByText("This is a child");
    expect(foundChild).toBeInTheDocument();
  });
});
