import { FILTER } from "../../utils/filter";

const TYPE = "@@filter";

const initialState = {
  selected: FILTER.ALL,
};

export default function reducer(state = initialState, action) {
  return action.type.includes(TYPE) ? action.result(state) : state;
}
