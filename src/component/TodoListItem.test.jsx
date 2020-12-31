import React from "react";
import { render } from "@testing-library/react";

import TodoListItem from "./TodoListItem";

describe("TodoListItem", () => {
  function renderItem(todo, onToggle, onDelete) {
    return render(
      <TodoListItem todo={todo} onToggle={onToggle} onDelete={onDelete} />,
    );
  }

  it("render todo content", () => {
    const todo = { id: 0, content: "Let's test", completed: false };
    const { container } = renderItem(todo);

    expect(container).toHaveTextContent(todo.content);
  });
});
