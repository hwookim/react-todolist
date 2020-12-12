import React, { useState } from "react";

import { FILTER, findFilterByState } from "../utils/filter";
import TodoFilterItem from "./TodoFilterItem";

export default function TodoFilter({ selected, onSelect }) {
  const handleSelectFilter = (state) => {
    onSelect(findFilterByState(state));
  };

  return (
    <ul className="filters">
      {Object.values(FILTER).map((filter) => (
        <TodoFilterItem
          key={filter.state}
          filter={filter}
          onSelect={handleSelectFilter}
          isSelected={selected === filter}
        />
      ))}
    </ul>
  );
}
