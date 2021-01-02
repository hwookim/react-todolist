import React from "react";
import { RecoilRoot } from "recoil";
import { todoState } from "../state/todoState";
import { filterState } from "../state/filterState";

import { render } from "@testing-library/react";

import { FILTER } from "../utils/filter";

export function renderWithRecoil(
  ui,
  { todos = [], filter = FILTER.ALL } = {
    todos: [],
    filter: FILTER.ALL,
  },
) {
  return render(
    <RecoilRoot
      initializeState={({ set }) => {
        set(todoState, todos);
        set(filterState, filter);
      }}>
      {ui}
    </RecoilRoot>,
  );
}
