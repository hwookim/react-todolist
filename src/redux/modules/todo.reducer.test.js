import reducer from "./todo.reducer";

import context from "jest-plugin-context";

import { createTodo, deleteTodo, setTodos, toggleTodo } from "./todo.actions";

describe("todo reducer", () => {
  describe("setTodos action", () => {
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

  describe("createTodo action", () => {
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

  describe("toggleTodo action", () => {
    context("with incomplete todo", () => {
      const incompleteTodo = { id: 0, content: "toggleTodo", completed: false };
      const initialState = {
        items: [incompleteTodo],
      };

      it("complete todo", () => {
        const state = reducer(initialState, toggleTodo(incompleteTodo.id));

        expect(state.items[0].completed).toBeTruthy();
      });
    });

    context("with completed todo", () => {
      const completedTodo = { id: 0, content: "toggleTodo", completed: true };
      const initialState = {
        items: [completedTodo],
      };

      it("incomplete todo", () => {
        const state = reducer(initialState, toggleTodo(completedTodo.id));

        expect(state.items[0].completed).toBeFalsy();
      });
    });
  });

  describe("deleteTodo action", () => {
    const todo = { id: 0, content: "toggleTodo", completed: false };
    const initialState = {
      items: [todo],
    };

    context("with exist id", () => {
      const existId = todo.id;

      it("remove todo", () => {
        const state = reducer(initialState, deleteTodo(existId));

        expect(state.items).toHaveLength(initialState.items.length - 1);
      });
    });

    context("without exist id", () => {
      const notExistId = 9999;

      it("doesn't remove todo", () => {
        const state = reducer(initialState, deleteTodo(notExistId));

        expect(state.items).toHaveLength(initialState.items.length);
      });
    });
  });
});
