import React, { useRef, useState } from "react";

import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const id = useRef(1);

  const handleAddTodo = (content) => {
    const task = {
      id: id.current++,
      content,
    };
    setTasks(tasks.concat(task));
  };

  const handleDeleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
          <TodoList tasks={tasks} onDelete={handleDeleteTodo} />
        </div>
        <div className="count-container">
          <span className="todo-count">
            총 <strong>0</strong> 개
          </span>
          <ul className="filters">
            <li>
              <a className="filter all selected" href="/">
                전체보기
              </a>
            </li>
            <li>
              <a className="filter active" href="/active">
                해야할 일
              </a>
            </li>
            <li>
              <a className="filter completed" href="/completed">
                완료한 일
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
