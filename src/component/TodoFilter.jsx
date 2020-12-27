import React from "react";
import { useSelector } from "react-redux";

import TodoFilterItem from "./TodoFilterItem";

import { FILTER } from "../utils/filter";

export default function TodoFilter() {
  const { selected } = useSelector((state) => state.filter);

  return (
    <ul className="filters">
      {Object.values(FILTER).map((filter) => (
        <TodoFilterItem
          key={filter.state}
          filter={filter}
          isSelected={selected === filter}
        />
      ))}
    </ul>
  );
}
