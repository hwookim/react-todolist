import { atom, selector } from "recoil";
import { filterState } from "./filterState";

import { FILTER } from "../utils/filter";

export const todoState = atom({
  key: "todoState",
  default: [],
});

export const filteredTodoState = selector({
  key: "filteredTodoState",
  get: ({ get }) => {
    const todos = get(todoState);
    const filter = get(filterState);

    switch (filter) {
      case FILTER.ACTIVE:
        return todos.filter((item) => !item.completed);
      case FILTER.COMPLETED:
        return todos.filter((item) => item.completed);
      default:
        return todos;
    }
  },
});
