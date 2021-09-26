import "./App.css";
import "../src/Pages/Todo.scss";
import NewTaskForm from "./Pages/NewTaskForm";
import TaskList from "./Pages/TaskList";
import React from "react";
function App() {
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
