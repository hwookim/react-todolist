import React from "react";

import TodoListItem from "./TodoListItem";

import useFilter from "../utils/useFilter";

export default function TodoList() {
  const { todos } = useFilter();

  return (
    <ul id="todo-list" className="todo-list">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
