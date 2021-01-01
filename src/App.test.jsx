import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { render } from "@testing-library/react";

import App from "./App";
import { FILTER } from "./utils/filter";

jest.mock("react-redux");

describe("App", () => {
  beforeEach(() => {
    useSelector.mockImplementation(() => ({
      todos: [],
      filter: FILTER.ALL,
    }));
    useDispatch.mockImplementation(() => jest.fn());
  });

  it("renders title - TODOS", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent("TODOS");
  });
});
