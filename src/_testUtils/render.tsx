import React from "react";
import { RecoilRoot } from "recoil";
import { todoState } from "../state/todoState";
import { filterState } from "../state/filterState";

import { render, RenderResult } from "@testing-library/react";

import Filter from "../domain/Filter";
import Todo from "../domain/Todo";

export interface RecoilProps {
  todos?: Todo[];
  filter?: Filter;
}

const renderWithRecoil = (
  ui: JSX.Element,
  { todos = [], filter = Filter.ALL }: RecoilProps = { todos: [], filter: Filter.ALL },
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
