import { CREATE_TODO, DELETE_TODO, SET_TODOS, TOGGLE_TODO } from "../actionTypes";

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    payload: {
      todos,
    },
  };
}

export function createTodo(content) {
  return {
    type: CREATE_TODO,
    payload: {
      content,
    },
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}
