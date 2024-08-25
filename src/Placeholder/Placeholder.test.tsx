import React from "react";
import { render } from "@testing-library/react";

import Placeholder from "./Placeholder";

describe("Placeholder Component", () => {
  it("renders an img element with the correct src and alt attributes", () => {
    const { getByAltText } = render(
      <Placeholder
        width={100}
        height={100}
        text="Test"
        background="#000"
        textColor="#fff"
      />
    );

    const imgElement = getByAltText("Test");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.tagName).toBe("IMG");
    expect(imgElement.getAttribute("src")).toContain("data:image/svg+xml");
    expect(imgElement.getAttribute("alt")).toBe("Test");
  });

  it("renders default placeholder text when text prop is not provided", () => {
    const { getByAltText } = render(<Placeholder width={100} height={100} />);

    const imgElement = getByAltText("100x100");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.tagName).toBe("IMG");
    expect(imgElement.getAttribute("src")).toContain("data:image/svg+xml");
    expect(imgElement.getAttribute("alt")).toBe("100x100");
  });

  it("applies default width, height, background, and textColor when not provided", () => {
    const { getByAltText } = render(<Placeholder />);

    const imgElement = getByAltText("50x50");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.tagName).toBe("IMG");
    expect(imgElement.getAttribute("src")).toContain("data:image/svg+xml");
    expect(imgElement.getAttribute("alt")).toBe("50x50");
  });
});
