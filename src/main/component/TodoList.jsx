import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <ul id="todo-list" className="todo-list">
      {tasks.map((task) => (
        <TodoListItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
