import React from "react";
import "./App.css";
import TodoList from "./TodoList";

/**
 * Renders the header and TodoList
 */

function App() {
  return (
    <div className="App">
      <svg className="vertical-lines" width="100" height="127" xmlns="http://www.w3.org/2000/svg">
        <line x1="82" y1="0" x2="82" y2="500" stroke="#ff9999" strokeWidth="2" />
        <line x1="89" y1="0" x2="89" y2="500" stroke="#ff9999" strokeWidth="2" />
      </svg>
      <header className="app-header">
        <h1>ToDo</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
