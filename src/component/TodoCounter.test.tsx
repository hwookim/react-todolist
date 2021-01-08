import React from "react";
import { render, RenderResult } from "@testing-library/react";

import TodoCounter, { Props } from "./TodoCounter";
import Todo from "../domain/Todo";

describe("TodoCounter", () => {
  function renderCount({ todos }: Props): RenderResult {
    return render(<TodoCounter todos={todos} />);
  }

  describe("with todoState", () => {
    const todos = [new Todo(0, "1st Todo", false), new Todo(1, "2nd Todo", false)];

    it("render todoState length", () => {
      const { container } = renderCount({ todos });

      expect(container).toHaveTextContent(todos.length.toString());
    });
  });
});
