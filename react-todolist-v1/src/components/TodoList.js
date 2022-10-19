import React, { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  // The bottom code is from stackoverflow to prevent empty spaces to be recorded as a todo
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    // this is defining the new todos using array with spread to code in the other todos
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Things to do today</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
