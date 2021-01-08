import React from "react";

import { fireEvent, RenderResult } from "@testing-library/react";
import { RecoilProps, renderWithRecoil } from "../_testUtils/render";

import TodoListContainer from "./TodoListContainer";
import Filter, { FILTER } from "../domain/Filter";
import Todo from "../domain/Todo";

const INCOMPLETE_TODO: Todo = new Todo(1, "incomplete", false);
const COMPLETED_TODO: Todo = new Todo(2, "completed", true);

describe("TodoListContainer", () => {
  function renderContainer({ todos, filter = FILTER.ALL }: RecoilProps): RenderResult {
    return renderWithRecoil(<TodoListContainer />, { todos, filter });
  }

  describe("with todos", () => {
    const todos = [new Todo(1, "1st Todo", false), new Todo(2, "2nd Todo", false)];

    it("render all todos", () => {
      const { container } = renderContainer({ todos });

      todos.forEach((todo) => {
        expect(container).toHaveTextContent(todo.getContent());
      });
    });
  });

  describe("with active filter and mixed todos", () => {
    const todos = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter = FILTER.ACTIVE;

    it("render only incomplete todo", () => {
      const { container } = renderContainer({ todos, filter });

      expect(container).toHaveTextContent(INCOMPLETE_TODO.getContent());
      expect(container).not.toHaveTextContent(COMPLETED_TODO.getContent());
    });
  });

  describe("with completed filter and mixed todos", () => {
    const todos = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter = FILTER.COMPLETED;

    it("render only complete todo", () => {
      const { container } = renderContainer({ todos, filter });

      expect(container).not.toHaveTextContent(INCOMPLETE_TODO.getContent());
      expect(container).toHaveTextContent(COMPLETED_TODO.getContent());
    });
  });

  describe("click toggle btn with incomplete todo", () => {
    const todos = [new Todo(1, "1st Todo", false)];

    it("complete todo", () => {
      const { container } = renderContainer({ todos });
      const $toggleBtn = container.querySelector(".toggle") as HTMLElement;
      const $todo = $toggleBtn.closest("li") as HTMLElement;

      fireEvent.click($toggleBtn);

      expect($todo).toHaveClass("completed");
    });
  });

  describe("click destroy btn", () => {
    const todo = new Todo(1, "1st Todo", false);

    it("remove todo", () => {
      const { container } = renderContainer({ todos: [todo] });
      const $destroyBtn = container.querySelector(".destroy") as HTMLElement;

      fireEvent.click($destroyBtn);

      expect(container).not.toHaveTextContent(todo.getContent());
    });
  });

  describe("click completed filter with mixed todos", () => {
    const todos = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter = FILTER.COMPLETED;

    it("render only complete todo", () => {
      const { container, getByText }: RenderResult = renderContainer({ todos });
      const $completedFilterBtn: HTMLElement = getByText(filter.getText());

      fireEvent.click($completedFilterBtn);

      expect(container).not.toHaveTextContent(INCOMPLETE_TODO.getContent());
      expect(container).toHaveTextContent(COMPLETED_TODO.getContent());
    });
  });

  describe("click active filter with mixed todos", () => {
    const todos = [INCOMPLETE_TODO, COMPLETED_TODO];
    const filter = FILTER.ACTIVE;

    it("render only complete todo", () => {
      const { container, getByText } = renderContainer({ todos });
      const $activeFilterBtn = getByText(filter.getText());

      fireEvent.click($activeFilterBtn);

      expect(container).toHaveTextContent(INCOMPLETE_TODO.getContent());
      expect(container).not.toHaveTextContent(COMPLETED_TODO.getContent());
    });
  });
});
