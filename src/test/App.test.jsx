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
  });

  context("click destroy btn of item", () => {
    const { container } = renderApp();
    const $input = container.querySelector(".new-todo");
    const $list = container.querySelector(".todo-list");

    fireEvent.change($input, {
      target: { value: "Let's TDD" },
    });

    fireEvent.keyPress($input, {
      key: "Enter",
      code: 13,
      charCode: 13,
    });

    const $destroyBtn = container.querySelector("[data-id='1'] .destroy");
    fireEvent.click($destroyBtn);

    it("remove item", () => {
      expect($list).not.toHaveTextContent("Let's TDD");
    });
  });
});
