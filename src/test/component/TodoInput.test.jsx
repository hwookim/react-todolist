import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TodoInput from "../../main/component/TodoInput";

describe("TodoInput", () => {
  it("render Input placeholder", () => {
    const { getByPlaceholderText } = render(<TodoInput />);

    getByPlaceholderText("할일을 추가해주세요");
  });

  it("keypress enter to input, run method onInsert and clear value", () => {
    const onInsert = jest.fn();
    const { getByPlaceholderText } = render(<TodoInput onInsert={onInsert} />);
    const input = getByPlaceholderText("할일을 추가해주세요");

    fireEvent.change(input, {
      target: { value: "Let's TDD" },
    });

    fireEvent.keyPress(input, {
      key: "Enter",
      code: 13,
      charCode: 13,
    });

    expect(onInsert).toBeCalledWith("Let's TDD");
    expect(input).toHaveValue("");
  });
});
