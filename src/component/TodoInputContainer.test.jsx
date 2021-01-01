import React from "react";

import { fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";
import { renderWithMockingRedux } from "../_testUtils/render";

import { createTodo } from "../redux/modules/todo.actions";

import TodoInputContainer from "./TodoInputContainer";

jest.mock("react-redux");

describe("TodoInputContainer", () => {
  function renderContainer({ dispatch = jest.fn() } = {}) {
    return renderWithMockingRedux(<TodoInputContainer />, {
      dispatch,
    });
  }

  context("keydown enter with value", () => {
    const dispatch = jest.fn();
    const value = "It's new Todo";

    it("run createTodo action with value", () => {
      const { container } = renderContainer({ dispatch });
      const $input = container.querySelector(".new-todo");

      fireEvent.change($input, {
        target: { value },
      });

      fireEvent.keyDown($input, {
        key: "Enter",
        code: "Enter",
      });

      expect(dispatch).toBeCalledWith(createTodo(value));
    });
  });
});
