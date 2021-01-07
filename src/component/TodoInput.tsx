import React, { useState } from "react";

export interface Props {
  onAdd: Function;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState<string>("");

  const handleChangeValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleAddTodo = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key !== "Enter") {
      return;
    }

    const text = value;
    if (text.trim() === "") {
      return;
    }

    onAdd(text);
    setValue("");
  };

  return (
    <input
      id="new-todo-title"
      className="new-todo"
      placeholder="할일을 추가해주세요"
      value={value}
      onChange={handleChangeValue}
      onKeyDown={handleAddTodo}
      autoFocus
    />
  );
};

export default TodoInput;
