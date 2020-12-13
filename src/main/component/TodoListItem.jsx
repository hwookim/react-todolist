import React, { useState } from "react";

export default function TodoListItem({
  task: { id, content, completed },
  onToggle,
  onDelete,
}) {
  const getStatus = () => {
    return completed ? "completed" : "";
  };

  const handleToggleTodo = () => {
    onToggle(id);
  };

  const handleDeleteTodo = () => {
    onDelete(id);
  };

  return (
    <li className={getStatus()} data-id={id}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={handleToggleTodo}
          defaultChecked={completed}
        />
        <label className="label">{content}</label>
        <button className="destroy" onClick={handleDeleteTodo} />
      </div>
      <input className="edit" />
    </li>
  );
}
