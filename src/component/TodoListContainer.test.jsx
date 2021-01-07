import React from "react";

import { fireEvent, RenderResult } from "@testing-library/react";
import context from "jest-plugin-context";
import { renderWithRecoil } from "../_testUtils/render";

import TodoListContainer from "./TodoListContainer";
import Filter, { FILTER } from "../domain/Filter";
import Todo from "../domain/Todo";

const INCOMPLETE_TODO: Todo = new Todo(1, "incomplete", false);
const COMPLETED_TODO: Todo = new Todo(2, "completed", true);

describe("TodoListContainer", () => {
  function renderContainer({ todos = [], filter = FILTER.ALL } = {}) {
    return renderWithRecoil(<TodoListContainer />, { todos, filter });
  }

  context("with todos", () => {
    const todos: Array<Todo> = [new Todo(1, "1st Todo", false), new Todo(2, "2nd Todo", false)];

    it("render all todos", () => {
      const { container }: RenderResult = renderContainer({ todos });

      todos.forEach((todo) => {
        expect(container).toHaveTextContent(todo.getContent());
      });
    });
  });

  context("with active filter and mixed todos", () => {
    const todos: Array<Todo> = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter: Filter = FILTER.ACTIVE;

    it("render only incomplete todo", () => {
      const { container }: RenderResult = renderContainer({ todos, filter });

      expect(container).toHaveTextContent(INCOMPLETE_TODO.getContent());
      expect(container).not.toHaveTextContent(COMPLETED_TODO.getContent());
    });
  });

  context("with completed filter and mixed todos", () => {
    const todos: Array<Todo> = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter: Filter = FILTER.COMPLETED;

    it("render only complete todo", () => {
      const { container }: RenderResult = renderContainer({ todos, filter });

      expect(container).not.toHaveTextContent(INCOMPLETE_TODO.getContent());
      expect(container).toHaveTextContent(COMPLETED_TODO.getContent());
    });
  });

  context("click toggle btn with incomplete todo", () => {
    const todos: Array<Todo> = [new Todo(1, "1st Todo", false)];

    it("complete todo", () => {
      const { container }: RenderResult = renderContainer({ todos });
      const $toggleBtn: HTMLElement = container.querySelector(".toggle");
      const $todo: HTMLElement = $toggleBtn.closest("li");

      fireEvent.click($toggleBtn);

      expect($todo).toHaveClass("completed");
    });
  });

  context("click destroy btn", () => {
    const todo: Todo = new Todo(1, "1st Todo", false);

    it("remove todo", () => {
      const { container }: RenderResult = renderContainer({ todos: [todo] });
      const $destroyBtn: HTMLElement = container.querySelector(".destroy");

      fireEvent.click($destroyBtn);

      expect(container).not.toHaveTextContent(todo.getContent());
    });
  });

  context("click completed filter with mixed todos", () => {
    const todos: Array<Todo> = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter: Filter = FILTER.COMPLETED;

    it("render only complete todo", () => {
      const { container, getByText }: RenderResult = renderContainer({ todos });
      const $completedFilterBtn: HTMLElement = getByText(filter.getText());

      fireEvent.click($completedFilterBtn);

      expect(container).not.toHaveTextContent(INCOMPLETE_TODO.getContent());
      expect(container).toHaveTextContent(COMPLETED_TODO.getContent());
    });
  });

  context("click active filter with mixed todos", () => {
    const todos: Array<Todo> = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter: Filter = FILTER.ACTIVE;

    it("render only complete todo", () => {
      const { container, getByText }: RenderResult = renderContainer({ todos });
      const $activeFilterBtn: HTMLElement = getByText(filter.getText());

      fireEvent.click($activeFilterBtn);

      expect(container).toHaveTextContent(INCOMPLETE_TODO.getContent());
      expect(container).not.toHaveTextContent(COMPLETED_TODO.getContent());
    });
  });
});
