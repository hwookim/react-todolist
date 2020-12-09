import React, { useState } from "react";

export default function TodoItem({ task }) {
  const [completed, setCompleted] = useState(false);

  const handleToggleTodo = () => {
    setCompleted(!completed);
  };

  const getStatus = () => {
    return completed ? "completed" : "";
  };

  return (
    <li className={getStatus()}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={handleToggleTodo} />
        <label className="label">{task.content}</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  );
}
