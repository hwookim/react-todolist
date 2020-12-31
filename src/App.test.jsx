import React from "react";

import App from "./App";
import { renderWithRedux } from "./_testUtils/render";

describe("App", () => {
  it("renders title - TODOS", () => {
    const { container } = renderWithRedux(<App />);

    expect(container).toHaveTextContent("TODOS");
  });
});
