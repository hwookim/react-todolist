import React from "react";

import "./App.css";
import TodoInputContainer from "./component/TodoInputContainer";
import TodoListContainer from "./component/TodoListContainer";

export default function App() {
  return (
    <section className="todoapp">
      <h1>TODOS</h1>
      <TodoInputContainer />
      <TodoListContainer />
    </section>
  );
}
