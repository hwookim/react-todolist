import { SET_FILTER } from "../actionTypes";

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    result: (state) => ({
      ...state,
      selected: filter,
    }),
  };
}
