import { CREATE_TASK, DELETE_TASK, SET_TASKS, TOGGLE_TASK } from "../actions";

export function setTasks(tasks) {
  return {
    type: SET_TASKS,
    payload: {
      tasks,
    },
  };
}

export function createTask(content) {
  return {
    type: CREATE_TASK,
    payload: {
      content,
    },
  };
}

export function toggleTask(id) {
  return {
    type: TOGGLE_TASK,
    payload: {
      id,
    },
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
}
