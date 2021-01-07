import React from "react";

import { fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";
import { renderWithRecoil } from "../_testUtils/render";

import TodoListContainer from "./TodoListContainer";
import { FILTER } from "../domain/Filter";

const INCOMPLETE_TODO = { id: 1, content: "incomplete", completed: false };
const COMPLETED_TODO = { id: 2, content: "completed", completed: true };

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
    const todos = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter = FILTER.ACTIVE;

    it("render only incomplete todo", () => {
      const { container } = renderContainer({ todos, filter });

      expect(container).toHaveTextContent(INCOMPLETE_TODO.content);
      expect(container).not.toHaveTextContent(COMPLETED_TODO.content);
    });
  });

  context("with completed filter and mixed todos", () => {
    const todos = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter = FILTER.COMPLETED;

    it("render only complete todo", () => {
      const { container } = renderContainer({ todos, filter });

      expect(container).not.toHaveTextContent(INCOMPLETE_TODO.content);
      expect(container).toHaveTextContent(COMPLETED_TODO.content);
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

  context("click completed filter with mixed todos", () => {
    const todos = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter = FILTER.COMPLETED;

    it("render only complete todo", () => {
      const { container, getByText } = renderContainer({ todos });
      const $completedFilterBtn = getByText(filter.getText());

      fireEvent.click($completedFilterBtn);

      expect(container).not.toHaveTextContent(INCOMPLETE_TODO.content);
      expect(container).toHaveTextContent(COMPLETED_TODO.content);
    });
  });

  context("click active filter with mixed todos", () => {
    const todos = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter = FILTER.ACTIVE;

    it("render only complete todo", () => {
      const { container, getByText } = renderContainer({ todos });
      const $activeFilterBtn = getByText(filter.getText());

      fireEvent.click($activeFilterBtn);

      expect(container).toHaveTextContent(INCOMPLETE_TODO.content);
      expect(container).not.toHaveTextContent(COMPLETED_TODO.content);
    });
  });
});
