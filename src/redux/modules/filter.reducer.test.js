import reducer from "./filter.reducer";

import { setFilter } from "./filter.actions";

import { FILTER } from "../../utils/filter";

describe("filter reducer", () => {
  describe("setFilter action", () => {
    const initialState = {
      selected: FILTER.ALL,
    };

    const filter = FILTER.ACTIVE;

    it("changes state.selected", () => {
      const state = reducer(initialState, setFilter(filter));

      expect(state.selected).toEqual(filter);
    });
  });
});
