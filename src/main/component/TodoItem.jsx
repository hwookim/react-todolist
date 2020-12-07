import React from "react";

export default function TodoItem({ task }) {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label className="label">{task.content}</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  );
}
