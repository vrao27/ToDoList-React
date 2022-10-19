import React, { useState } from "react";
import "./App.js";

const App = () => {
  const [textInput, setTextInput] = useState("");

  const [todos, setTodos] = useState([]);

  const [currentlyEditing, setCurrentlyEditing] = useState();

  // const e = {
  //   target: { value: "asdfdsaf" },
  //   other: "something",
  //   third: "something else",
  // };
  // const { target, other } = e;
  // after this line, target is the object {value: 'asdfdsaf'} and other is the string 'something'

  // const arr = [1, 2, 3];
  // const [a, b, c] = arr;

  localStorage.setItem('todos', todos)

  return (
    <div>
      <input
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
        placeholder="Add a task"
      />

      <button
        onClick={() => {
          setTodos((currentTodos) => [
            ...currentTodos,
            { text: textInput, done: false },
          ]);
          setTextInput("");
        }}
      >
        Add
      </button>

      {todos.map((todo, index) => (
        <div key={index} className="listElement">
          <input
            type={"checkbox"}
            checked={todo.done}
            onChange={(e) =>
              setTodos((currentTodos) => {
                const newTodos = [...currentTodos];
                newTodos[index].done = e.target.checked;
                return newTodos;
              })
            }
          ></input>
          <div
            className={todo.done ? "textInputDone" : ""}
            onClick={() => setCurrentlyEditing(index)}
            onBlur={() => setCurrentlyEditing(undefined)}
          >
            {currentlyEditing === index ? (
              <input
                value={todo.text}
                autoFocus
                onChange={(e) =>
                  setTodos((currentTodos) => {
                    const newTodos = [...currentTodos];
                    newTodos[index].text = e.target.value;
                    return newTodos;
                  })
                }
              ></input>
            ) : (
              todo.text
            )}
          </div>

          <button
            onClick={() =>
              setTodos((currentTodos) => {
                const newTodos = [...currentTodos];
                newTodos.splice(index, 1);
                return newTodos;
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
