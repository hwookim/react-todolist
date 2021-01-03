import React from "react";

import { fireEvent } from "@testing-library/react";
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

    it("render only complete todo", () => {
      const { container } = renderContainer({ todos, filter });

      expect(container).not.toHaveTextContent("incomplete");
      expect(container).toHaveTextContent("completed");
    });
  });

  context("click toggle btn with incomplete todo", () => {
    const todos = [{ id: 1, content: "1st Todo", completed: false }];

    it("complete todo", () => {
      const { container } = renderContainer({ todos });
      const $toggleBtn = container.querySelector(".toggle");
      const $todo = $toggleBtn.closest("li");

      fireEvent.click($toggleBtn);

      expect($todo).toHaveClass("completed");
    });
  });

  context("click destroy btn", () => {
    const todo = { id: 1, content: "1st Todo", completed: false };

    it("remove todo", () => {
      const { container } = renderContainer({ todos: [todo] });
      const $destroyBtn = container.querySelector(".destroy");

      fireEvent.click($destroyBtn);

      expect(container).not.toHaveTextContent(todo.content);
    });
  });
});
