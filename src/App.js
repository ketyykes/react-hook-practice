import React, { useState } from 'react'
const App = () => {
  const [number, setNumber] = useState(123);
  const incrementHandler = () => {
    setTimeout(function delay() {
      setNumber((prev)=>(prev + 1));
    }, 1000);

  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App