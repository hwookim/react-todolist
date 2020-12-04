import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TodoInput from "../../main/component/TodoInput";

describe("TodoInput", () => {
  it("keypress enter to input, run method onInsert and clear value", () => {
    const onInsert = jest.fn();
    const { container } = render(<TodoInput onInsert={onInsert} />);
    const $input = container.querySelector(".new-todo");

    fireEvent.change($input, {
      target: { value: "Let's TDD" },
    });

    fireEvent.keyPress($input, {
      key: "Enter",
      code: 13,
      charCode: 13,
    });

    expect(onInsert).toBeCalledWith("Let's TDD");
    expect($input).toHaveValue("");
  });
});
