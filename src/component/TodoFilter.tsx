import React from "react";

import TodoFilterItem from "./TodoFilterItem";

import Filter, { FILTER } from "../domain/Filter";

export interface Props {
  selected: Filter;
  onSelect: Function;
}

const TodoFilter: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <ul className="filters">
      {Object.values(FILTER).map((filter) => (
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
