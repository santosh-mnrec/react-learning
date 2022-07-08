import React from 'react';

import TodoItem from './TodoItem';
export default function TodoList(props) {
  const list = props.todos.map((t) => {
    return (
      <TodoItem
        key={t.text}
        text={t.text}
        handleClick={props.toggle}
        complete={t.complete}
      />
    );
  });
  return list;
}
