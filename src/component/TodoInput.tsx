import React, { useCallback, useState } from "react";

type OnAdd = (text: string) => void;

export interface Props {
  onAdd: OnAdd;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState<string>("");

  const handleChangeValue = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(target.value);
    },
    [value],
  );

  const handleAddTodo = useCallback(
    ({ key }: React.KeyboardEvent<HTMLInputElement>): void => {
      if (key !== "Enter") {
        return;
      }

      if (value.trim() === "") {
        return;
      }

      onAdd(value);
      setValue("");
    },
    [value],
  );

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
