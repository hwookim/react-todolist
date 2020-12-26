import { CREATE_TODO, DELETE_TODO, SET_TODOS, TOGGLE_TODO } from "../actions";

let nextId = 0;
const initialState = {
  todos: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS: {
      const { todos } = action.payload;

      return {
        ...state,
        todos,
      };
    }

    case CREATE_TODO: {
      const { todos } = state;
      const { content } = action.payload;
      const todo = {
        id: nextId++,
        content,
        completed: false,
      };

      return {
        ...state,
        todos: (todos || []).concat(todo),
      };
    }

    case TOGGLE_TODO: {
      const { todos } = state;
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
        todos: todos.map(toggle),
      };
    }

    case DELETE_TODO: {
      const { todos } = state;

      return {
        ...state,
        todos: todos.filter((todo) => todo.id !== action.payload.id),
      };
    }

    default: {
      return state;
    }
  }
}
