// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="todo-list">
          <h1>Todo List</h1>
          <ul className="list-unstyled">
            <li className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />
                  Complete first task
                </label>
              </div>
            </li>
            <li className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />
                  Complete second task
                </label>
              </div>
            </li>
            <li className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input type="checkbox" value="" />
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
