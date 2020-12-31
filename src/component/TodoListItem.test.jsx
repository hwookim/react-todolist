import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoListItem from "./TodoListItem";

describe("TodoListItem", () => {
  function renderItem({ todo, onToggle, onDelete }) {
    return render(
      <TodoListItem todo={todo} onToggle={onToggle} onDelete={onDelete} />,
    );
  }

  context("with incomplete todo", () => {
    const todo = { id: 0, content: "Let's test", completed: false };

    it("render todo content without completed class", () => {
      const { container } = renderItem({ todo });
      const $li = container.querySelector("li");

      expect(container).toHaveTextContent(todo.content);
      expect($li).not.toHaveClass("completed");
    });
  });

  context("with completed todo", () => {
    const todo = { id: 0, content: "Let's test", completed: true };

    it("render todo content with completed class", () => {
      const { container } = renderItem({ todo });
      const $li = container.querySelector("li");

      expect(container).toHaveTextContent(todo.content);
      expect($li).toHaveClass("completed");
    });
  });

  it("run onToggle method with click toggle btn", () => {
    const todo = { id: 0, content: "Let's test", completed: false };
    const onToggle = jest.fn();
    const { container } = renderItem({ todo, onToggle });
    const $toggleBtn = container.querySelector(".toggle");

    fireEvent.click($toggleBtn);

    expect(onToggle).toBeCalledWith(todo.id);
  });

  it("run onDelete method with click destroy btn", () => {
    const todo = { id: 0, content: "Let's test", completed: false };
    const onDelete = jest.fn();
    const { container } = renderItem({ todo, onDelete });
    const $destroyBtn = container.querySelector(".destroy");

    fireEvent.click($destroyBtn);

    expect(onDelete).toBeCalledWith(todo.id);
  });
});
