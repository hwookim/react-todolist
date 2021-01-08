import React from "react";
import Todo from "../domain/Todo";

export interface Props {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

const TodoListItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
  const getStatus = (): string => {
    return todo.isCompleted() ? "completed" : "";
  };

  return (
    <li className={getStatus()} data-id={todo.getId()}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() => onToggle(todo)}
          defaultChecked={todo.isCompleted()}
        />
        <label className="label">{todo.getContent()}</label>
        <button className="destroy" onClick={() => onDelete(todo)} />
      </div>
      <input className="edit" />
    </li>
  );
};

export default TodoListItem;
