import reducer from "./todo.reducer";

import context from "jest-plugin-context";

import { createTodo, setTodos } from "./todo.actions";

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

  context("with createTodo action", () => {
    const initialState = {
      items: [],
    };

    const newTodoContent = "test";

    it("add todo to state.items", () => {
      const state = reducer(initialState, createTodo(newTodoContent));
      const todosContents = state.items.map(({ content }) => content);

      expect(state.items).not.toHaveLength(0);
      expect(todosContents).toContain(newTodoContent);
    });
  });
});
