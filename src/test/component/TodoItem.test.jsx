import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoItem from "../../main/component/TodoItem";

describe("TodoItem", () => {
  function renderTodoItem(task, onDelete) {
    return render(<TodoItem task={task} onDelete={onDelete} />);
  }

  context("with not completed task", () => {
    const task = {
      id: 1,
      content: "Todo!",
    };

    it("render task content", () => {
      const { container } = renderTodoItem(task);
      expect(container).toHaveTextContent(task.content);
    });
  });

  context("with completed task", () => {
    const task = {
      id: 1,
      content: "Todo!",
      completed: true,
    };

    it("render task content with checked", () => {
      const { container } = renderTodoItem(task);
      expect(container).toHaveTextContent(task.content);

      const $li = container.querySelector("li");
      const $btn = container.querySelector(".toggle");
      expect($li).toHaveClass("completed");
      expect($btn).toHaveAttribute("checked");
    });
  });

  context("click toggle btn", () => {
    const task = {
      id: 1,
      content: "Todo!",
    };

    const { container } = renderTodoItem(task);
    const $li = container.querySelector("li");
    const $btn = container.querySelector(".toggle");
    fireEvent.click($btn);

    it("add class", () => {
      expect($li).toHaveClass("completed");
    });
  });

  context("click toggle btn twice", () => {
    const task = {
      id: 1,
      content: "Todo!",
    };

    const { container } = renderTodoItem(task);
    const $li = container.querySelector("li");
    const $btn = container.querySelector(".toggle");
    fireEvent.click($btn);
    fireEvent.click($btn);

    it("remove class", () => {
      expect($li).not.toHaveClass("completed");
    });
  });

  context("click destroy btn", () => {
    const task = {
      id: 1,
      content: "Todo!",
    };
    const onDelete = jest.fn();

    it("run method", () => {
      const { container } = renderTodoItem(task, onDelete);
      const $destroyBtn = container.querySelector(".destroy");

      fireEvent.click($destroyBtn);
      expect(onDelete).toHaveBeenCalled();
    });
  });
});
