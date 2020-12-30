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

const actions = [CREATE_TODO, DELETE_TODO, SET_TODOS, TOGGLE_TODO];

export default function reducer(state = initialState, action) {
  return actions.includes(action.type) ? action.result(state) : state;
}
