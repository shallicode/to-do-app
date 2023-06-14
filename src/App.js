// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="todo-list">
          <h1>Todo List</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="todo-item-check-1"
                />
                <label className="form-check-label" htmlFor="todo-item-check-1">
                  Complete first task
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="todo-item-check-2"
                />
                <label className="form-check-label" htmlFor="todo-item-check-2">
                  Complete second task
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="todo-item-check-3"
                />
                <label className="form-check-label" htmlFor="todo-item-check-3">
                  Complete third task
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
