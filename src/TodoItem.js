import React from 'react';
export default function TodoItem(props) {
  return (
    <div className="mt-2">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={props.complete}
          defaultChecked={false}
          onClick={() => {
            props.handleClick(props);
          }}
        ></input>

        <label
          className="form-check-label"
          style={{
            textDecoration: props.complete ? 'line-through' : undefined,
          }}
        >
          {props.text}
        </label>
      </div>
    </div>
  );
}
