import React from "react";
import { render } from "@testing-library/react";

import TodoInput from "../../main/component/TodoInput";

describe("TodoInput", () => {
  it("render Input placeholder", () => {
    const { getByPlaceholderText } = render(<TodoInput />);

    getByPlaceholderText("할일을 추가해주세요");
  });
});
