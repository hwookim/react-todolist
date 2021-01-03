import React, { useRef } from "react";

import { useRecoilState } from "recoil";

import TodoInput from "./TodoInput";
import { todoState } from "../state/todoState";

export default function TodoInputContainer() {
  const [todos, setTodos] = useRecoilState(todoState);
  const nextId = useRef(0);

  const handleAddTodo = (text) => {
    const todo = {
      id: nextId.current++,
      content: text,
      completed: false,
    };

    setTodos([...todos, todo]);
  };

  return <TodoInput onAdd={handleAddTodo} />;
}
