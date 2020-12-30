import {
  CREATE_TODO,
  DELETE_TODO,
  SET_TODOS,
  TOGGLE_TODO,
} from "../actionTypes";

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    result: (state) => ({
      ...state,
      items: todos,
    }),
  };
}

export function createTodo(content) {
  return {
    type: CREATE_TODO,
    result: (state) => {
      const { items: todos, nextId } = state;
      const todo = {
        id: nextId + 1,
        content,
        completed: false,
      };

      return {
        ...state,
        items: todos.concat(todo),
        nextId: nextId + 1,
      };
    },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    result: (state) => {
      const { items: todos } = state;

      const toggle = (todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      };

      return {
        ...state,
        items: todos.map(toggle),
      };
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    result: (state) => {
      const { items: todos } = state;

      return {
        ...state,
        items: todos.filter((todo) => todo.id !== id),
      };
    },
  };
}
