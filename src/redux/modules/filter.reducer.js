import { SET_FILTER } from "../actionTypes";

import { FILTER } from "../../utils/filter";

const initialState = {
  selected: FILTER.ALL,
};

const actions = [SET_FILTER];

export default function reducer(state = initialState, action) {
  return actions.includes(action.type) ? action.result(state) : state;
}
