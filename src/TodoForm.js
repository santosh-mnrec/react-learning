import React, { useState } from 'react';
export default function AddTodoForm(props) {
  const [text, setText] = useState('');
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="add todo"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <button
        className="btn btn-success mt-2"
        onClick={(e) => {
          e.preventDefault();
          props.addTodo(text);
          setText('');
        }}
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
}
