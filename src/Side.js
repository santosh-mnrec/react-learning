import React from 'react';
import WindowTracker from './WindowTracer';
export default function WindowResize(props) {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prev) => !prev);
  }
  return (
    <div className="container">
      <button onClick={toggle}>Toggle </button>
      {show && <WindowTracker />}
    </div>
  );
}
