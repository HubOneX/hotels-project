import NoHotelsFoundInfo from "./NoHotelsFoundInfo";
import renderer from "react-test-renderer";

describe("NoHotelsFoundInfo", () => {
  it("should match the snapshot", () => {
    const container = renderer.create(<NoHotelsFoundInfo />);

    expect(container).toMatchSnapshot();
  });
});
