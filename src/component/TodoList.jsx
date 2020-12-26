import React from "react";
import { useSelector } from "react-redux";

import TodoListItem from "./TodoListItem";

import { FILTER } from "../utils/filter";

export default function TodoList() {
  const { todos, filter } = useSelector((state) => ({
    todos: state.todo.todos,
    filter: state.filter.filter,
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
    <ul id="todo-list" className="todo-list">
      {filterTodos().map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
