import React from "react";
import { useSelector } from "react-redux";
import { FILTER } from "../utils/filter";

export default function TodoCount() {
  const { tasks, filter } = useSelector((state) => ({
    tasks: state.task.tasks,
    filter: state.filter.filter,
  }));

  const filterTasks = () => {
    if (filter === FILTER.ACTIVE) {
      return tasks.filter((task) => !task.completed);
    }
    if (filter === FILTER.COMPLETED) {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  return (
    <span className="todo-count">
      총 <strong>{filterTasks().length}</strong> 개
    </span>
  );
}
