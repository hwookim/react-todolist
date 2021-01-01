import React from "react";

import { fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";
import { renderWithMockingRedux } from "../_testUtils/render";

import { deleteTodo, toggleTodo } from "../redux/modules/todo.actions";

import TodoListContainer from "./TodoListContainer";
import { FILTER } from "../utils/filter";
import { setFilter } from "../redux/modules/filter.actions";

jest.mock("react-redux");

describe("TodoListContainer", () => {
  function renderContainer({
    todos = [],
    filter = FILTER.ALL,
    dispatch = jest.fn(),
  } = {}) {
    return renderWithMockingRedux(<TodoListContainer />, {
      mockStore: { todos, filter },
      dispatch,
    });
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

  context("click toggle btn", () => {
    const dispatch = jest.fn();
    const todos = [{ id: 1, content: "1st Todo", completed: false }];

    it("run toggleTodo action", () => {
      const { container } = renderContainer({ todos, dispatch });
      const $toggleBtn = container.querySelector(".toggle");

      fireEvent.click($toggleBtn);

      expect(dispatch).toBeCalledWith(toggleTodo(todos[0].id));
    });
  });

  context("click destroy btn", () => {
    const dispatch = jest.fn();
    const todos = [{ id: 1, content: "1st Todo", completed: false }];

    it("run deleteTodo action with todo id", () => {
      const { container } = renderContainer({ todos, dispatch });
      const $deleteBtn = container.querySelector(".destroy");

      fireEvent.click($deleteBtn);

      expect(dispatch).toBeCalledWith(deleteTodo(todos[0].id));
    });
  });

  context("click filter btn", () => {
    const dispatch = jest.fn();
    const filter = FILTER.ACTIVE;

    it("run deleteTodo action with todo id", () => {
      const { getByText } = renderContainer({ dispatch });
      const $filterBtn = getByText(filter.text);

      fireEvent.click($filterBtn);

      expect(dispatch).toBeCalledWith(setFilter(filter));
    });
  });
});
