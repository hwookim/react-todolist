import React, { useState } from "react";

export default function TodoItem({
  task: { id, content, completed },
  onDelete,
}) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleToggleTodo = () => {
    setIsCompleted(!isCompleted);
  };

  const getStatus = () => {
    return isCompleted ? "completed" : "";
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
          defaultChecked={isCompleted}
        />
        <label className="label">{content}</label>
        <button className="destroy" onClick={handleDeleteTodo} />
      </div>
      <input className="edit" />
    </li>
  );
}
