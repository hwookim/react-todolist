import React, { useState } from "react";

import { FILTER } from "../utils/filter";
import TodoFilterItem from "./TodoFilterItem";

export default function TodoFilter() {
  const [selected, setSelected] = useState("all");

  const handleSelectFilter = (state) => {
    setSelected(state);
  };

  return (
    <ul className="filters">
      {Object.values(FILTER).map((filter) => (
        <TodoFilterItem
          key={filter.state}
          filter={filter}
          onSelect={handleSelectFilter}
          isSelected={selected === filter.state}
        />
      ))}
    </ul>
  );
}
