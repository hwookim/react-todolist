import React, { useState } from "react";

export default function TodoItem({ task: { id, content, completed } }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleToggleTodo = () => {
    setIsCompleted(!isCompleted);
  };

  const getStatus = () => {
    return isCompleted ? "completed" : "";
  };

  return (
    <li className={getStatus()} data-id={id}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={handleToggleTodo} />
        <label className="label">{content}</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  );
}
