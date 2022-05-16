import React, { useState } from 'react'
const App = () => {
  const [number, setNumber] = useState([1, 2, 3]);
  const incrementHandler = () => {

    setNumber((prev) => (
      [...prev, prev[prev.length - 1] + 1]
    ))

  };
  return (
    <div>
      <div>{number[number.length - 1]}</div>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App