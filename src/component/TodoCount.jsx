import React from "react";
import useFilter from "../utils/useFilter";

export default function TodoCount() {
  const { todos } = useFilter();

  return (
    <span className="todo-count">
      총 <strong>{todos.length}</strong> 개
    </span>
  );
}
