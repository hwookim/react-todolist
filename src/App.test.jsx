import React from "react";

import App from "./App";
import { FILTER } from "./utils/filter";
import { renderWithMockingRedux } from "./_testUtils/render";

jest.mock("react-redux");

describe("App", () => {
  function renderApp({ todos = [], filter = FILTER.ALL } = {}) {
    return renderWithMockingRedux(<App />, {
      mockStore: { todos, filter },
    });
  }

  it("renders title - TODOS", () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent("TODOS");
  });
});
