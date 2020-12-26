import { SET_FILTER } from "../actions";

import { FILTER } from "../../utils/filter";

const initialState = {
  filter: FILTER.ALL,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      const { filter } = action.payload;

      return {
        ...state,
        filter,
      };
    }

    default: {
      return state;
    }
  }
}
