import React from "react";
import "./App.css";
import TodoList from "./Todo";
import Auth from "./auth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TodoList /> */}
        <Auth />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
