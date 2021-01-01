import { FILTER } from "../../utils/filter";
import { SET_FILTER } from "../actionTypes";

const initialState = {
  selected: FILTER.ALL,
};

const actions = {
  [SET_FILTER]: (state, { filter }) => ({
    ...state,
    selected: filter,
  }),
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (actions.hasOwnProperty(type)) {
    return actions[type](state, payload);
  }
  return state;
}
