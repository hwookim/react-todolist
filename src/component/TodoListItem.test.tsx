import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";

import TodoListItem from "./TodoListItem";
import Todo from "../domain/Todo";

interface Props {
  todo: Todo;
  onToggle?: () => void;
  onDelete?: () => void;
}

describe("TodoListItem", () => {
  function renderItem({ todo, onToggle = jest.fn(), onDelete = jest.fn() }: Props): RenderResult {
    return render(<TodoListItem todo={todo} onToggle={onToggle} onDelete={onDelete} />);
  }

  describe("with incomplete todo", () => {
    const todo = new Todo(0, "incomplete todo", false);

    it("render todo content without completed class", () => {
      const { container } = renderItem({ todo });
      const $li = container.querySelector("li") as HTMLElement;

      expect(container).toHaveTextContent(todo.getContent());
      expect($li).not.toHaveClass("completed");
    });
  });

  describe("with completed todo", () => {
    const todo = new Todo(0, "completed todo", true);

    it("render todo content with completed class", () => {
      const { container } = renderItem({ todo });
      const $li = container.querySelector("li") as HTMLElement;

      expect(container).toHaveTextContent(todo.getContent());
      expect($li).toHaveClass("completed");
    });
  });

  it("run onToggle method with click toggle btn", () => {
    const todo = new Todo(0, "Let's test", false);
    const onToggle = jest.fn();
    const { container } = renderItem({ todo, onToggle });
    const $toggleBtn = container.querySelector(".toggle") as HTMLElement;

    fireEvent.click($toggleBtn);

    expect(onToggle).toBeCalledWith(todo);
  });

  it("run onDelete method with click destroy btn", () => {
    const todo = new Todo(0, "Let's test", false);
    const onDelete = jest.fn();
    const { container } = renderItem({ todo, onDelete });
    const $destroyBtn = container.querySelector(".destroy") as HTMLElement;

    fireEvent.click($destroyBtn);

    expect(onDelete).toBeCalledWith(todo);
  });
});
