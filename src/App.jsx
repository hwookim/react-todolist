import React from "react";

import "./App.css";
import TodoInputContainer from "./component/TodoInputContainer";
import TodoListContainer from "./component/TodoListContainer";

export default function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <div>
          <h1>TODOS</h1>
          <TodoInputContainer />
        </div>
        <TodoListContainer />
      </section>
    </div>
  );
}
