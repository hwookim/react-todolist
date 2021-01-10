import React, { useCallback, useMemo } from "react";

import TodoFilterItem from "./TodoFilterItem";

import Filter from "../domain/Filter";

type OnSelect = (filter: Filter) => void;

export interface Props {
  selected: Filter;
  onSelect: OnSelect;
}

const TodoFilter: React.FC<Props> = ({ selected, onSelect }) => {
  const todoFilterItems = useMemo<JSX.Element[]>(() => {
    return Filter.getFilters().map((filter: Filter) => (
      <TodoFilterItem
        key={filter.getState()}
        filter={filter}
        isSelected={selected === filter}
        onSelect={onSelect}
      />
    ));
  }, [selected]);

  return <ul className="filters">{todoFilterItems}</ul>;
};

export default TodoFilter;
