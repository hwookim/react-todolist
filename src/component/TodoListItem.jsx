import React from "react";

export default function TodoListItem({ todo: { id, content, completed }, onToggle, onDelete }) {
  const getStatus = () => {
    return completed ? "completed" : "";
  };

  return (
    <li className={getStatus()} data-id={id}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() => onToggle(id)}
          defaultChecked={completed}
        />
        <label className="label">{content}</label>
        <button className="destroy" onClick={() => onDelete(id)} />
      </div>
      <input className="edit" />
    </li>
  );
}
