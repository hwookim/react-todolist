import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoListItem from "../../main/component/TodoListItem";

describe("TodoListItem", () => {
  function renderListItem({ task, onToggle, onDelete }) {
    return render(
      <TodoListItem task={task} onToggle={onToggle} onDelete={onDelete} />,
    );
  }

  context("with not completed task", () => {
    const task = {
      id: 1,
      content: "Todo!",
    };

    it("render task content", () => {
      const { container } = renderListItem({ task });
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
      const { container } = renderListItem({ task });
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
    const onToggle = jest.fn();

    it("run method", () => {
      const { container } = renderListItem({ task, onToggle });
      const $btn = container.querySelector(".toggle");

      fireEvent.click($btn);
      expect(onToggle).toHaveBeenCalled();
    });
  });

  context("click destroy btn", () => {
    const task = {
      id: 1,
      content: "Todo!",
    };
    const onDelete = jest.fn();

    it("run method", () => {
      const { container } = renderListItem({ task, onDelete });
      const $destroyBtn = container.querySelector(".destroy");

      fireEvent.click($destroyBtn);
      expect(onDelete).toHaveBeenCalled();
    });
  });
});
