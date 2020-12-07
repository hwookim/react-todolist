import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  if (tasks.length === 0) {
    tasks.push({ id: 0, content: "할 일이 없어요" });
  }
  return (
    <ul id="todo-list" className="todo-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
