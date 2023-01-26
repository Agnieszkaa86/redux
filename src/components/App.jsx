// import ReactDOM from "react-dom/client";
import React from "react";
import { StatusFilter } from "../components/StatusFilter/StatusFilter";
import { TaskList } from "../components/TaskList/TaskList";
import { TaskForm } from "./TaskForm/TaskForm";
export const App = () => {
  return (
    <div className="App">
      <h1>Redux app</h1>
      <TaskForm />
      <StatusFilter />
      <TaskList />
    </div>
  );
};
