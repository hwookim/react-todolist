import React from "react";
import { useSelector } from "react-redux";

import TodoListItem from "./TodoListItem";

import { FILTER } from "../utils/filter";

export default function TodoList() {
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
    <ul id="todo-list" className="todo-list">
      {filterTasks().map((task) => (
        <TodoListItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
