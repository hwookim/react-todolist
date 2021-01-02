import React from "react";

import context from "jest-plugin-context";
import { renderWithRecoil } from "../_testUtils/render";

import TodoListContainer from "./TodoListContainer";
import { FILTER } from "../utils/filter";

describe("TodoListContainer", () => {
  function renderContainer({ todos = [], filter = FILTER.ALL } = {}) {
    return renderWithRecoil(<TodoListContainer />, { todos, filter });
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

  context("with active filter and mixed todos", () => {
    const todos = [
      { id: 1, content: "incomplete", completed: false },
      { id: 2, content: "completed", completed: true },
    ];
    const filter = FILTER.ACTIVE;

    it("render only incomplete todo", () => {
      const { container } = renderContainer({ todos, filter });

      expect(container).toHaveTextContent("incomplete");
      expect(container).not.toHaveTextContent("completed");
    });
  });

  context("with completed filter and mixed todos", () => {
    const todos = [
      { id: 1, content: "incomplete", completed: false },
      { id: 2, content: "completed", completed: true },
    ];
    const filter = FILTER.COMPLETED;

    it("render only incomplete todo", () => {
      const { container } = renderContainer({ todos, filter });

      expect(container).not.toHaveTextContent("incomplete");
      expect(container).toHaveTextContent("completed");
    });
  });
});
