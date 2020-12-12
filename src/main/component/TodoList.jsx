import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ tasks, onDelete }) {
  return (
    <ul id="todo-list" className="todo-list">
      {tasks.map((task) => (
        <TodoListItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}
