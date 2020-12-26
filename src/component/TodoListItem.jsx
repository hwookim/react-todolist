import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/todo.actions";

export default function TodoListItem({ todo: { id, content, completed } }) {
  const dispatch = useDispatch();

  const [isCompleted, setIsCompleted] = useState(completed);

  const getStatus = () => {
    return isCompleted ? "completed" : "";
  };

  const handleToggleTodo = () => {
    setIsCompleted(!isCompleted);
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
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