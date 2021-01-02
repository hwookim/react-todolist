import React from "react";
import { render } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoCounter from "./TodoCounter";

describe("TodoCounter", () => {
  function renderCount({ todos }) {
    return render(<TodoCounter todos={todos} />);
  }

  context("with todoState", () => {
    const todos = [
      { id: 0, content: "1st Todo", completed: false },
      { id: 1, content: "2nd Todo", completed: false },
    ];

    it("render todoState length", () => {
      const { container } = renderCount({ todos });

      expect(container).toHaveTextContent(todos.length.toString());
    });
  });
});
