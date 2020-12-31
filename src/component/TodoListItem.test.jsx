import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TodoListItem from "./TodoListItem";

describe("TodoListItem", () => {
  function renderItem({ todo, onToggle, onDelete }) {
    return render(
      <TodoListItem todo={todo} onToggle={onToggle} onDelete={onDelete} />,
    );
  }

  it("render todo content", () => {
    const todo = { id: 0, content: "Let's test", completed: false };
    const { container } = renderItem({ todo });

    expect(container).toHaveTextContent(todo.content);
  });

  it("run onToggle method with click toggle btn", () => {
    const todo = { id: 0, content: "Let's test", completed: false };
    const onToggle = jest.fn();
    const { container } = renderItem({ todo, onToggle });
    const $toggleBtn = container.querySelector(".toggle");

    fireEvent.click($toggleBtn);

    expect(onToggle).toBeCalledWith(todo.id);
  });
});
