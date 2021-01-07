import React from "react";
import { render, RenderResult } from "@testing-library/react";
// @ts-ignore
import context from "jest-plugin-context";

import TodoCounter, { Props } from "./TodoCounter";
import Todo from "../domain/Todo";

describe("TodoCounter", () => {
  function renderCount({ todos }: Props) {
    return render(<TodoCounter todos={todos} />);
  }

  context("with todoState", () => {
    const todos: Array<Todo> = [
      new Todo(0, "1st Todo", false),
      new Todo(1, "2nd Todo", false),
    ];

    it("render todoState length", () => {
      const { container }: RenderResult = renderCount({ todos });

      expect(container).toHaveTextContent(todos.length.toString());
    });
  });
});
