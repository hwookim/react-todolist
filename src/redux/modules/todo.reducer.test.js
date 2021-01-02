import reducer from "./todo.reducer";

import context from "jest-plugin-context";

import { setTodos } from "./todo.actions";

describe("todo reducer", () => {
  context("with setTodos action", () => {
    const initialState = {
      items: [],
    };

    const todos = [
      { id: 1, content: "1st Todo", completed: false },
      { id: 2, content: "2nd Todo", completed: false },
    ];

    it("changes state.items", () => {
      const state = reducer(initialState, setTodos(todos));

      expect(state.items).toHaveLength(todos.length);
    });
  });
});
