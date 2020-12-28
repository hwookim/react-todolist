import React from "react";

import TodoListItem from "./TodoListItem";
import TodoCounter from "./TodoCounter";
import TodoFilter from "./TodoFilter";

export default function TodoList({
  todos,
  selected,
  onToggle,
  onDelete,
  onSelectFilter,
}) {
  return (
    <div>
      <div className="main">
        <ul id="todo-list" className="todo-list">
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
      <div className="count-container">
        <TodoCounter todos={todos} />
        <TodoFilter selected={selected} onSelect={onSelectFilter} />
      </div>
    </div>
  );
}
