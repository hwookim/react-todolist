import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders title - TODOS", () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(container).toHaveTextContent("TODOS");
  });
});
