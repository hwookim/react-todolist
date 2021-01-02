import React from "react";

import { renderWithRecoil } from "./_testUtils/render";

import App from "./App";

describe("App", () => {
  it("renders title - TODOS", () => {
    const { container } = renderWithRecoil(<App />);

    expect(container).toHaveTextContent("TODOS");
  });
});
