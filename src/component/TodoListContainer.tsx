import React, { useCallback } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { todoState, filteredTodoState } from "../state/todoState";
import { filterState } from "../state/filterState";

import TodoList from "./TodoList";
import Todo from "../domain/Todo";
import Filter from "../domain/Filter";

const TodoListContainer: React.FC = () => {
  const [todos, setTodos] = useRecoilState<Todo[]>(todoState);
  const [filter, setFilter] = useRecoilState<Filter>(filterState);
  const filteredTodos = useRecoilValue<Todo[]>(filteredTodoState);

  const handleToggleTodo = useCallback((target: Todo): void => {
    const toggle = (todo: Todo): Todo => {
      return target.equals(todo) ? todo.toggle() : todo;
    };

    setTodos(todos.map(toggle));
  }, []);

  const handleDeleteTodo = useCallback((target: Todo): void => {
    setTodos(todos.filter((todo: Todo) => !target.equals(todo)));
  }, []);

  const handleSelectFilter = useCallback((filter: Filter): void => {
    setFilter(filter);
  }, []);

  return (
    <TodoList
      todos={filteredTodos}
      selected={filter}
      onToggle={handleToggleTodo}
      onDelete={handleDeleteTodo}
      onSelectFilter={handleSelectFilter}
    />
  );
};

export default TodoListContainer;
