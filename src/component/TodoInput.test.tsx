import React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";

import TodoInput, { Props } from "./TodoInput";

describe("TodoInput", () => {
  function renderInput({ onAdd }: Props) {
    return render(<TodoInput onAdd={onAdd} />);
  }

  it("keypress enter to input, run onAdd method and clear value", () => {
    const onAdd: Function = jest.fn();
    const { getByPlaceholderText }: RenderResult = renderInput({ onAdd });
    const $input: HTMLElement = getByPlaceholderText("할일을 추가해주세요");

    const value = "Let's test";

    fireEvent.change($input, {
      target: { value },
    });

    fireEvent.keyDown($input, {
      key: "Enter",
      code: "Enter",
    });

    expect(onAdd).toBeCalledWith(value);
    expect($input).toHaveValue("");
  });
});
