import React, { useRef } from "react";

import { useRecoilState } from "recoil";

import TodoInput from "./TodoInput";
import { todoState } from "../state/todoState";
import Todo from "../domain/Todo";

export default function TodoInputContainer() {
  const [todos, setTodos] = useRecoilState(todoState);
  const nextId = useRef(0);

  const handleAddTodo = (text: string) => {
    const todo = new Todo(nextId.current++, text, false);

    setTodos([...todos, todo]);
  };

  return <TodoInput onAdd={handleAddTodo} />;
}
