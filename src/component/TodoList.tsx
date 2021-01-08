import React from "react";

import TodoListItem from "./TodoListItem";
import TodoCounter from "./TodoCounter";
import TodoFilter from "./TodoFilter";
import Todo from "../domain/Todo";
import Filter from "../domain/Filter";

export interface Props {
  todos: Todo[];
  selected: Filter;
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
  onSelectFilter: (filter: Filter) => void;
}

const TodoList: React.FC<Props> = ({ todos, selected, onToggle, onDelete, onSelectFilter }) => {
  return (
    <div>
      <div className="main">
        <ul id="todo-list" className="todo-list">
          {todos.map((todo) => (
            <TodoListItem key={todo.getId()} todo={todo} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </ul>
      </div>
      <div className="count-container">
        <TodoCounter todos={todos} />
        <TodoFilter selected={selected} onSelect={onSelectFilter} />
      </div>
    </div>
  );
};

export default TodoList;
