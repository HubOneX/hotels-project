import renderer from "react-test-renderer";
import Footer from "./Footer";

describe("Footer", () => {
  it("should match the snapshot", () => {
    const container = renderer.create(<Footer fixedAtBottom={false} />);

    expect(container).toMatchSnapshot();
  });
});
