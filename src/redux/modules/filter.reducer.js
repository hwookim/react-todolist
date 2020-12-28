import { SET_FILTER } from "../actionTypes";

import { FILTER } from "../../utils/filter";

const initialState = {
  selected: FILTER.ALL,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      const { filter } = action.payload;

      return {
        ...state,
        selected: filter,
      };
    }

    default: {
      return state;
    }
  }
}
