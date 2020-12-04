import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "../main/App";

describe("App", () => {
  it("render new task", () => {
    const { container } = render(<App />);
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

    expect($list).toHaveTextContent("Let's TDD");
  });
});
