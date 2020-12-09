import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoItem from "../../main/component/TodoItem";

describe("TodoItem", () => {
  const task = {
    id: 1,
    content: "Todo!",
  };
  const { container } = render(<TodoItem task={task} />);

  it("render task content", () => {
    expect(container).toHaveTextContent(task.content);
  });

  context("click toggle btn", () => {
    const $li = container.querySelector("li");
    const $btn = container.querySelector(".toggle");
    fireEvent.click($btn);

    it("add class", () => {
      expect($li).toHaveClass("completed");
    });
  });
});
