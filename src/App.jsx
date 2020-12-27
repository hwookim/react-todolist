import React from "react";

import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import TodoFilter from "./component/TodoFilter";
import TodoCounter from "./component/TodoCounter";

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
          <TodoCounter />
          <TodoFilter />
        </div>
      </section>
    </div>
  );
}
