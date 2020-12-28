import React from "react";

import TodoFilterItem from "./TodoFilterItem";

import { FILTER } from "../utils/filter";

export default function TodoFilter({ selected, onSelect }) {
  return (
    <ul className="filters">
      {Object.values(FILTER).map((filter) => (
        <TodoFilterItem
          key={filter.state}
          filter={filter}
          isSelected={selected === filter}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
