import React, { useState } from 'react'
const App = () => {
  const [number,setNumber] = useState(123);
  const incrementHandler = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App