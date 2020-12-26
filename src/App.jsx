import React from "react";

import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import TodoFilter from "./component/TodoFilter";

export default function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <div>
          <h1>TODOS</h1>
          <TodoInput />
        </div>
        <div className="main">
          <TodoList />
        </div>
        <div className="count-container">
          {/*<span className="todo-count">*/}
          {/*  총 <strong>{filterTasks().length}</strong> 개*/}
          {/*</span>*/}
          <TodoFilter />
        </div>
      </section>
    </div>
  );
}
