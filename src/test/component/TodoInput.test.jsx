import { render, screen } from "@testing-library/react";
import TodoInput from "../../main/component/TodoInput";

describe("TodoInput", () => {
  it("render Input placeholder", () => {
    render(<TodoInput />);

    screen.getByPlaceholderText("할일을 추가해주세요");
  });
});
