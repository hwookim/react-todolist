import { CREATE_TODO, DELETE_TODO, SET_TODOS, TOGGLE_TODO } from "../actions";

let nextId = 0;
const initialState = {
  items: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TODOS: {
      const { todos } = action.payload;

      return {
        ...state,
        items: todos,
      };
    }

    case CREATE_TODO: {
      const { items: todos } = state;
      const { content } = action.payload;
      const todo = {
        id: nextId++,
        content,
        completed: false,
      };

      return {
        ...state,
        items: todos.concat(todo),
      };
    }

    case TOGGLE_TODO: {
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
    }

    case DELETE_TODO: {
      const { items: todos } = state;

      return {
        ...state,
        items: todos.filter((todo) => todo.id !== action.payload.id),
      };
    }

    default: {
      return state;
    }
  }
}
