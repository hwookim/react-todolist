import React from "react";

import { useDispatch } from "react-redux";

import { deleteTodo, toggleTodo } from "../redux/modules/todo.actions";
import { setFilter } from "../redux/modules/filter.actions";
import useFilter from "../utils/useFilter";

import TodoList from "./TodoList";

export default function TodoListContainer() {
  const dispatch = useDispatch();
  const { todos, filter } = useFilter();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleSelectFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <TodoList
      todos={todos}
      selected={filter}
      onToggle={handleToggleTodo}
      onDelete={handleDeleteTodo}
      onSelectFilter={handleSelectFilter}
    />
  );
}
