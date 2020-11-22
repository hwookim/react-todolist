import React from "react";
import { render } from "@testing-library/react";

import App from "../main/App";

describe("App", () => {
  it("render TODOS", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("TODOS");
  });
});
