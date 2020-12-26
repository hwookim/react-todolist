import React from "react";
import { useSelector } from "react-redux";

import TodoFilterItem from "./TodoFilterItem";

import { FILTER } from "../utils/filter";

export default function TodoFilter() {
  const { filter: selected } = useSelector((state) => ({
    filter: state.filter.filter,
  }));

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
