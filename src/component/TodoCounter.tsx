import React from "react";
import Todo from "../domain/Todo";

export interface Props {
  todos: Todo[];
}

const TodoCounter: React.FC<Props> = ({ todos }) => {
  return (
    <span className="todo-count">
      총 <strong>{todos.length}</strong> 개
    </span>
  );
};

export default TodoCounter;
