import React from 'react';
export default function WindowTracer() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    console.log('calling effect');
    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth);
    });
  });

  return <h1>Window width: {windowWidth}</h1>;
}
