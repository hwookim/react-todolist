import { useMemo } from "react";
import { useSelector } from "react-redux";
import { FILTER } from "./filter";

export default function useFilter() {
  const { todos, filter } = useSelector((state) => ({
    todos: state.todo.items,
    filter: state.filter.selected,
  }));

  const items = useMemo(() => filterItems(todos, filter), [todos, filter]);
  return {
    todos: items,
    filter,
  };
}

function filterItems(items, filter) {
  if (filter === FILTER.ACTIVE) {
    return items.filter((todo) => !todo.completed);
  } else if (filter === FILTER.COMPLETED) {
    return items.filter((todo) => todo.completed);
  }
  return items;
}
