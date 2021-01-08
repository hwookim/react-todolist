import React from "react";

import "./App.css";
import TodoInputContainer from "./component/TodoInputContainer";
import TodoListContainer from "./component/TodoListContainer";

const App: React.FC = () => {
  return (
    <section className="todoapp">
      <h1>TODOS</h1>
      <TodoInputContainer />
      <TodoListContainer />
    </section>
  );
};

export default App;
