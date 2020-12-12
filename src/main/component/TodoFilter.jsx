import React from "react";

import { FILTER } from "../utils/filter";
import TodoFilterItem from "./TodoFilterItem";

export default function TodoFilter() {
  return (
    <ul className="filters">
      {Object.values(FILTER).map((filter) => (
        <TodoFilterItem key={filter.state} filter={filter} />
      ))}
    </ul>
  );
}
