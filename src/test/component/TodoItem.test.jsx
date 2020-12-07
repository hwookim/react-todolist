import React from "react";
import { render } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoItem from "../../main/component/TodoItem";

describe("TodoItem", () => {
  context("with task", () => {
    const task = {
      id: 1,
      content: "Todo!",
    };

    it("render task content", () => {
      const { container } = render(<TodoItem task={task} />);

      expect(container).toHaveTextContent(task.content);
    });
  });
});
