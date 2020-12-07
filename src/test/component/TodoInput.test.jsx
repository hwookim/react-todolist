import React from "react";
import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import TodoInput from "../../main/component/TodoInput";

describe("TodoInput", () => {
  const onInsert = jest.fn();
  const { container } = render(<TodoInput onInsert={onInsert} />);
  const $input = container.querySelector(".new-todo");

  context("with value", () => {
    const value = "Let's TDD";

    it("keypress Enter run method onInsert by value and clear value", () => {
      fireEvent.change($input, {
        target: { value: value },
      });

      fireEvent.keyPress($input, {
        key: "Enter",
        code: 13,
        charCode: 13,
      });

      expect(onInsert).toBeCalledWith(value);
      expect($input).toHaveValue("");
    });
  });

  context("without value", () => {
    const value = " ";

    it("does not run method", () => {
      fireEvent.change($input, {
        target: { value },
      });

      fireEvent.keyPress($input, {
        key: "Enter",
        code: 13,
        charCode: 13,
      });

      expect(onInsert).not.toHaveBeenCalled();
    });
  });
});
