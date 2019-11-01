import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.css";

const App = function() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
