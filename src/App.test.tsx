import React from "react";

import { renderWithRecoil } from "./_testUtils/render";

import App from "./App";
import { fireEvent } from "@testing-library/react";

describe("App", () => {
  it("renders title - TODOS", () => {
    const { container } = renderWithRecoil(<App />);

    expect(container).toHaveTextContent("TODOS");
  });

  it("input twice, display all todos", () => {
    const { container, getByPlaceholderText } = renderWithRecoil(<App />);
    const $input = getByPlaceholderText("할일을 추가해주세요");

    const value1 = "1st todo";
    const value2 = "2nd todo";

    addTodo($input, value1);
    addTodo($input, value2);

    expect(container).toHaveTextContent(value1);
    expect(container).toHaveTextContent(value2);
  });
});

function addTodo($input: HTMLElement, value: string): void {
  fireEvent.change($input, {
    target: { value },
  });

  fireEvent.keyDown($input, {
    key: "Enter",
    code: "Enter",
  });
}
