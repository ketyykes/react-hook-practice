import React, { useState, useEffect } from 'react'
const App = () => {
  useEffect(() => { console.log("我只印一次"); }, [])
  const [number, setNumber] = useState(0);
  const incrementHandler = () => {
    setNumber((prev) => (prev + 1));
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={incrementHandler}>+</button>
    </div>
  );

}
export default App