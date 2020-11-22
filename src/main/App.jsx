import React from "react";

import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

export default function App() {
  const tasks = [{ id: 0, content: "Default Task" }];

  return (
    <div className="App">
      <section className="todoapp">
        <div>
          <h1>TODOS</h1>
          <TodoInput />
        </div>
        <div className="main">
          <input className="toggle-all" type="checkbox" />
          <TodoList tasks={tasks} />
        </div>
        <div className="count-container">
          <span className="todo-count">
            총 <strong>0</strong> 개
          </span>
          <ul className="filters">
            <li>
              <a className="filter all selected" href="#/">
                전체보기
              </a>
            </li>
            <li>
              <a className="filter active" href="#/active">
                해야할 일
              </a>
            </li>
            <li>
              <a className="filter completed" href="#/completed">
                완료한 일
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
