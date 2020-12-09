import React from "react";

export default function TodoInput({ onInsert }) {
  const handleAddTodo = ({ key, target }) => {
    if (key !== "Enter") {
      return;
    }

    const text = target.value;
    if (text.trim() === "") {
      return;
    }

    onInsert(text);
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
