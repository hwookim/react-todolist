import {
  CREATE_TODO,
  DELETE_TODO,
  SET_TODOS,
  TOGGLE_TODO,
} from "../actionTypes";

const initialState = {
  items: [],
  nextId: 0,
};

export default function reducer(state = initialState, action) {
  const actions = {
    [SET_TODOS]: () => {
      const { todos } = action.payload;

      return {
        ...state,
        items: todos,
      };
    },
    [CREATE_TODO]: () => {
      const { items: todos, nextId } = state;
      const { content } = action.payload;
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
    [TOGGLE_TODO]: () => {
      const { items: todos } = state;
      const { id } = action.payload;

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
    [DELETE_TODO]: () => {
      const { items: todos } = state;

      return {
        ...state,
        items: todos.filter((todo) => todo.id !== action.payload.id),
      };
    },
  };

  return actions[action.type] ? actions[action.type]() : state;
}
