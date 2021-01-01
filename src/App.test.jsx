import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { render } from "@testing-library/react";
import context from "jest-plugin-context";

import App from "./App";
import { FILTER } from "./utils/filter";

jest.mock("react-redux");

describe("App", () => {
  function renderApp({
    todos = [],
    filter = FILTER.ALL,
    dispatch = jest.fn(),
  } = {}) {
    useSelector.mockImplementation(() => ({
      todos,
      filter,
    }));
    useDispatch.mockImplementation(() => dispatch);

    return render(<App />);
  }

  it("renders title - TODOS", () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent("TODOS");
  });
});
