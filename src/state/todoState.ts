import { atom, selector } from "recoil";
import { filterState } from "./filterState";
import Filter, { FILTER } from "../domain/Filter";
import Todo from "../domain/Todo";

export const todoState = atom<Todo[]>({
  key: "todoState",
  default: [],
});

export const filteredTodoState = selector<Todo[]>({
  key: "filteredTodoState",
  get: ({ get }) => {
    const todos: Todo[] = get(todoState);
    const filter: Filter = get(filterState);

    switch (filter) {
      case FILTER.ACTIVE:
        return todos.filter((item: Todo) => !item.isCompleted());
      case FILTER.COMPLETED:
        return todos.filter((item: Todo) => item.isCompleted());
      default:
        return todos;
    }
  },
});