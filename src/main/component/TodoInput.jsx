import React, { useState, useCallback } from "react";

export default function TodoInput({ onInsert }) {
  const [value, setValue] = useState("");
  const setValueOfEvent = (event) => {
    setValue(event.target.value);
  };
  const onChange = useCallback(setValueOfEvent, []);

  const onEnter = (event) => {
    if (event.key === "Enter") {
      onInsert(value);
      setValue("");
    }
  };

  return (
    <input
      id="new-todo-title"
      className="new-todo"
      placeholder="할일을 추가해주세요"
      value={value}
      onChange={onChange}
      onKeyPress={onEnter}
      autoFocus
    />
  );
}
