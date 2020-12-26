import React from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/todo.actions";

export default function TodoInput() {
  const dispatch = useDispatch();

  const handleAddTodo = ({ key, target }) => {
    if (key !== "Enter") {
      return;
    }

    const text = target.value;
    if (text.trim() === "") {
      return;
    }

    dispatch(createTodo(text));
    target.value = "";
  };

  return (
    <input
      id="new-todo-title"
      className="new-todo"
      placeholder="할일을 추가해주세요"
      onKeyPress={handleAddTodo}
      autoFocus
    />
  );
}
