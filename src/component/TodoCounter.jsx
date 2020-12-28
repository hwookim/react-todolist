import React from "react";

export default function TodoCounter({ todos }) {
  return (
    <span className="todo-count">
      총 <strong>{todos.length}</strong> 개
    </span>
  );
}
