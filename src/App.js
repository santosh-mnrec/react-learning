import React, { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Side from './Side';
export default function App() {
  const [todos, setTodos] = useState([]);

  function toggle(todo) {
    console.log(todo);
    const newTodo = todos.map((t) => {
      if (t.text === todo.text) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return t;
    });
    setTodos(newTodo);
  }
  function addTodo(text) {
    const newTodo = { text, complete: false };

    setTodos([...todos, newTodo]);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div>
        <TodoForm addTodo={addTodo} />
      </div>

      <TodoList todos={todos} toggle={toggle} />
      <br></br>
      <Side />
    </div>
  );
}
