import React, { useState, useCallback } from "react";

export default function TodoInput({ onInsert }) {
  const [text, setText] = useState("");
  const setValueOfEvent = (event) => {
    setText(event.target.value);
  };
  const onChange = useCallback(setValueOfEvent, []);

  const onEnter = ({ key }) => {
    if (key !== "Enter") {
      return;
    }

    if (text.trim() === "") {
      return;
    }

    onInsert(text);
    setText("");
  };

  return (
    <input
      id="new-todo-title"
      className="new-todo"
      placeholder="할일을 추가해주세요"
      value={text}
      onChange={onChange}
      onKeyPress={onEnter}
      autoFocus
    />
  );
}
