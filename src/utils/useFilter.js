import { useSelector } from "react-redux";
import { FILTER } from "./filter";

export default function useFilter() {
  const { todos, filter } = useSelector((state) => ({
    todos: state.todo.items,
    filter: state.filter.selected,
  }));

  let items = todos;
  if (filter === FILTER.ACTIVE) {
    items = todos.filter((todo) => !todo.completed);
  } else if (filter === FILTER.COMPLETED) {
    items = todos.filter((todo) => todo.completed);
  }
  return {
    todos: items,
  };
}
