import React from "react";
import { RecoilRoot } from "recoil";
import { todoState } from "../state/todoState";
import { filterState } from "../state/filterState";

import { render, RenderResult } from "@testing-library/react";

import Filter, { FILTER } from "../domain/Filter";
import Todo from "../domain/Todo";

export interface RecoilProps {
  todos?: Todo[];
  filter?: Filter;
}

const renderWithRecoil = (
  ui: JSX.Element,
  { todos = [], filter = FILTER.ALL }: RecoilProps = { todos: [], filter: FILTER.ALL },
): RenderResult => {
  return render(
    <RecoilRoot
      initializeState={({ set }) => {
        set<Todo[]>(todoState, todos);
        set<Filter>(filterState, filter);
      }}
    >
      {ui}
    </RecoilRoot>,
  );
};

export { renderWithRecoil };
