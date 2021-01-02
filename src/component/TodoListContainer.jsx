import React from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { todoState, filteredTodoState } from "../state/todoState";
import { filterState } from "../state/filterState";

import TodoList from "./TodoList";

export default function TodoListContainer() {
  const [todos, setTodos] = useRecoilState(todoState);
  const [filter, setFilter] = useRecoilState(filterState);
  const filteredTodos = useRecoilValue(filteredTodoState);

  const handleToggleTodo = (id) => {
    const toggle = (todo) => {
      if (todo.id !== id) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed,
      };
    };

    setTodos(todos.map(toggle));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSelectFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <TodoList
      todos={filteredTodos}
      selected={filter}
      onToggle={handleToggleTodo}
      onDelete={handleDeleteTodo}
      onSelectFilter={handleSelectFilter}
    />
  );
}
