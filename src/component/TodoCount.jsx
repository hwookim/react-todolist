import React from "react";
import { useSelector } from "react-redux";
import { FILTER } from "../utils/filter";

export default function TodoCount() {
  const { todos, filter } = useSelector((state) => ({
    todos: state.todo.items,
    filter: state.filter.selected,
  }));

  const filterTodos = () => {
    if (filter === FILTER.ACTIVE) {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === FILTER.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  return (
    <span className="todo-count">
      총 <strong>{filterTodos().length}</strong> 개
    </span>
  );
}
