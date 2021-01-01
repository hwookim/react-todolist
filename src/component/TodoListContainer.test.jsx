import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { render } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoListContainer from "./TodoListContainer";
import { FILTER } from "../utils/filter";

jest.mock("react-redux");

describe("TodoListContainer", () => {
  function renderContainer({
    todos = [],
    filter = FILTER.ALL,
    dispatch = jest.fn(),
  } = {}) {
    useSelector.mockImplementation(() => ({
      todos,
      filter,
    }));
    useDispatch.mockImplementation(() => dispatch);

    return render(<TodoListContainer />);
  }

  context("with todos", () => {
    const todos = [
      { id: 1, content: "1st Todo", completed: false },
      { id: 2, content: "2nd Todo", completed: false },
    ];

    it("render all todos", () => {
      const { container } = renderContainer({ todos });

      todos.forEach((todo) => {
        expect(container).toHaveTextContent(todo.content);
      });
    });
  });
});
