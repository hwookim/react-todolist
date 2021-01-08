import React, { useRef } from "react";

import { useRecoilState } from "recoil";

import TodoInput from "./TodoInput";
import { todoState } from "../state/todoState";
import Todo from "../domain/Todo";

const TodoInputContainer: React.FC = () => {
  const [todos, setTodos] = useRecoilState<Todo[]>(todoState);
  const nextId = useRef<number>(0);

  const handleAddTodo = (text: string): void => {
    const todo = new Todo(nextId.current++, text, false);

    setTodos([...todos, todo]);
  };

  return <TodoInput onAdd={handleAddTodo} />;
};

export default TodoInputContainer;
