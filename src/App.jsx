import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import TodoFilter from "./component/TodoFilter";
import { FILTER } from "./utils/filter";
import { deleteTask, toggleTask } from "./redux/modules/task.actions";

export default function App() {
  const [filter, setFilter] = useState(FILTER.ALL);

  const { tasks } = useSelector((state) => ({
    tasks: state.task.tasks,
  }));
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTask(id));
  };

  const handleSelectFilter = (selected) => {
    setFilter(selected);
  };

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
    <div className="App">
      <section className="todoapp">
        <div>
          <h1>TODOS</h1>
          <TodoInput />
        </div>
        <div className="main">
          <TodoList
            tasks={filterTasks()}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        </div>
        <div className="count-container">
          <span className="todo-count">
            총 <strong>{filterTasks().length}</strong> 개
          </span>
          <TodoFilter selected={filter} onSelect={handleSelectFilter} />
        </div>
      </section>
    </div>
  );
}
