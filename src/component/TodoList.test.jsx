import React from "react";
import { render } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoList from "./TodoList";

describe("TodoList", () => {
  function renderList({ todos, selected, onToggle, onDelete, onSelectFilter }) {
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

  context("with todos", () => {
    const todos = [
      { id: 0, content: "1st Todo", completed: false },
      { id: 1, content: "2nd Todo", completed: false },
    ];

    it("render all todos", () => {
      const { container } = renderList({ todos });

      todos.forEach(({ content }) =>
        expect(container).toHaveTextContent(content),
      );
    });
  });
});
