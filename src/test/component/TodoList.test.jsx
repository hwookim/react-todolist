import React from "react";
import { render } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoList from "../../main/component/TodoList";

describe("TodoList", () => {
  context("with Tasks", () => {
    const tasks = [
      { id: 1, content: "1st Todo" },
      { id: 2, content: "2nd Todo" },
    ];

    it("render Lists", () => {
      const { container } = render(<TodoList tasks={tasks} />);

      tasks.forEach(({ content }) =>
        expect(container).toHaveTextContent(content),
      );
    });
  });
});
