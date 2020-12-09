import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDelete }) {
  return (
    <ul id="todo-list" className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}
