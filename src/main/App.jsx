import React, { useRef, useState } from "react";

import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import TodoFilter from "./component/TodoFilter";
import { FILTER } from "./utils/filter";

export default function App() {
  const [filter, setFilter] = useState(FILTER.ALL);
  const [tasks, setTasks] = useState([]);
  const id = useRef(1);

  const handleAddTodo = (content) => {
    const task = {
      id: id.current++,
      content,
    };
    setTasks(tasks.concat(task));
  };

  const handleToggleTodo = (id) => {
    const target = tasks.find((task) => task.id === id);
    target.completed = !target.completed;
    setTasks(tasks);
  };

  const handleDeleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
          <TodoInput onInsert={handleAddTodo} />
        </div>
        <div className="main">
          <input className="toggle-all" type="checkbox" />
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
