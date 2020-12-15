import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import App from "../main/App";

describe("App", () => {
  function renderApp() {
    return render(<App />);
  }

  context("add new task", () => {
    const { container } = renderApp();
    const $input = container.querySelector(".new-todo");
    const $list = container.querySelector(".todo-list");
    const $count = container.querySelector(".todo-count");

    fireEvent.change($input, {
      target: { value: "Let's TDD" },
    });

    fireEvent.keyPress($input, {
      key: "Enter",
      code: 13,
      charCode: 13,
    });

    it("render new task", () => {
      expect($list).toHaveTextContent("Let's TDD");
    });

    it("count new task", () => {
      expect($count).toHaveTextContent("총 1 개");
    });
  });

  context("click toggle btn of item", () => {
    const { container } = renderApp();
    const $input = container.querySelector(".new-todo");

    addTask($input, "1st Task");

    const $toggleBtn = container.querySelector(".toggle");
    fireEvent.click($toggleBtn);

    const $item = $toggleBtn.closest("li");
    it("add completed class to closest li", () => {
      expect($item).toHaveClass("completed");
    });
  });

  context("click destroy btn of item", () => {
    const { container } = renderApp();
    const $input = container.querySelector(".new-todo");
    const $list = container.querySelector(".todo-list");

    addTask($input, "Task");

    const $destroyBtn = container.querySelector("[data-id='1'] .destroy");
    fireEvent.click($destroyBtn);

    it("remove item", () => {
      expect($list).not.toHaveTextContent("Task");
    });
  });

  context("filter completed", () => {
    const { container } = renderApp();
    const $input = container.querySelector(".new-todo");
    const $list = container.querySelector(".todo-list");
    const $completedBtn = container.querySelector(".active");

    addTask($input, "1st Task");
    addTask($input, "2nd Task");

    const $firstTodoToggleBtn = container.querySelector(".toggle");
    fireEvent.click($firstTodoToggleBtn);

    fireEvent.click($completedBtn);

    it("render only completed task ", () => {
      expect($list).not.toHaveTextContent("1st Task");
      expect($list).toHaveTextContent("2nd Task");
    });
  });
});

function addTask($input, value) {
  fireEvent.change($input, {
    target: { value },
  });

  fireEvent.keyPress($input, {
    key: "Enter",
    code: 13,
    charCode: 13,
  });
}
