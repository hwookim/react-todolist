import React from "react";

import TodoFilterItem from "./TodoFilterItem";

import Filter from "../domain/Filter";

type OnSelect = (filter: Filter) => void;

export interface Props {
  selected: Filter;
  onSelect: OnSelect;
}

const TodoFilter: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <ul className="filters">
      {Object.values(Filter.getFilters()).map((filter) => (
        <TodoFilterItem
          key={filter.getState()}
          filter={filter}
          isSelected={selected === filter}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default TodoFilter;
