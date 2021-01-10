import React from "react";
import { render, RenderResult } from "@testing-library/react";

import TodoList from "./TodoList";
import Todo from "../domain/Todo";
import Filter from "../domain/Filter";

interface Props {
  todos: Todo[];
  selected?: Filter;
  onToggle?: () => void;
  onDelete?: () => void;
  onSelectFilter?: () => void;
}

describe("TodoList", () => {
  function renderList({
    todos,
    selected = Filter.ALL,
    onToggle = jest.fn(),
    onDelete = jest.fn(),
    onSelectFilter = jest.fn,
  }: Props): RenderResult {
    return render(
      <TodoList
        todos={todos}
        selected={selected}
        onToggle={onToggle}
        onDelete={onDelete}
        onSelectFilter={onSelectFilter}
      />,
    );
  }

  describe("with todoState", () => {
    const todos = [new Todo(0, "1st Todo", false), new Todo(1, "2nd Todo", false)];

    it("render all todoState", () => {
      const { container } = renderList({ todos });

      todos.forEach((todo: Todo) => expect(container).toHaveTextContent(todo.getContent()));
    });
  });
});
