import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="todoapp">
        <div>
          <h1>TODOS</h1>
          <input
            id="new-todo-title"
            className="new-todo"
            placeholder="할일을 추가해주세요"
            autoFocus
          />
        </div>
        <div className="main">
          <input className="toggle-all" type="checkbox" />
          <ul id="todo-list" className="todo-list" />
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

export default App;
