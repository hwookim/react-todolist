import React from "react";
import { render } from "@testing-library/react";

import TodoList from "../../main/component/TodoList";

describe("TodoList", () => {
  it("render Lists", () => {
    const tasks = [{ id: 1, content: "1st Todo" }];
    const { container } = render(<TodoList tasks={tasks} />);

    expect(container).toHaveTextContent("1st Todo");
  });
});
