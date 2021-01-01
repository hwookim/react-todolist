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

const actions = {
  [SET_TODOS]: (state, { todos }) => ({
    ...state,
    items: todos,
  }),

  [CREATE_TODO]: (state, { content }) => {
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

  [TOGGLE_TODO]: (state, { id }) => {
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

  [DELETE_TODO]: (state, { id }) => {
    const { items: todos } = state;

    return {
      ...state,
      items: todos.filter((todo) => todo.id !== id),
    };
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (actions.hasOwnProperty(type)) {
    return actions[type](state, payload);
  }
  return state;
}
