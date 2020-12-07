import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import App from "../main/App";

describe("App", () => {
  const { container } = render(<App />);
  const $input = container.querySelector(".new-todo");
  const $list = container.querySelector(".todo-list");

  context("add new task", () => {
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
});
