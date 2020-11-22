import React from "react";

export default function TodoList({ tasks }) {
  if (tasks.length === 0) {
    tasks.push({ id: 0, content: "할 일이 없어요" });
  }
  return (
    <ul id="todo-list" className="todo-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label className="label">{task.content}</label>
            <button className="destroy" />
          </div>
          <input className="edit" />
        </li>
      ))}
    </ul>
  );
}
