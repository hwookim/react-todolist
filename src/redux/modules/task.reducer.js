import { CREATE_TASK, DELETE_TASK, SET_TASKS, TOGGLE_TASK } from "../actions";

let nextId = 0;
const initialState = {
  tasks: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASKS: {
      const { tasks } = action.payload;

      return {
        ...state,
        tasks,
      };
    }

    case CREATE_TASK: {
      const { tasks } = state;
      const { content } = action.payload;
      const task = {
        id: nextId++,
        content,
        completed: false,
      };

      return {
        ...state,
        tasks: (tasks || []).concat(task),
      };
    }

    case TOGGLE_TASK: {
      const { tasks } = state;
      const { id } = action.payload;

      const toggle = (task) => {
        if (task.id !== id) {
          return task;
        }
        return {
          ...task,
          completed: !task.completed,
        };
      };

      return {
        ...state,
        tasks: tasks.map(toggle),
      };
    }

    case DELETE_TASK: {
      const { tasks } = state;

      return {
        ...state,
        tasks: tasks.filter((task) => task.id !== action.payload.id),
      };
    }

    default: {
      return state;
    }
  }
}
