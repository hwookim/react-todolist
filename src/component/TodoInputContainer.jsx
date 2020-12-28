import React from "react";

import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/todo.actions";

import TodoInput from "./TodoInput";

export default function TodoInputContainer() {
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(createTodo(text));
  };

  return <TodoInput onAdd={handleAddTodo} />;
}
