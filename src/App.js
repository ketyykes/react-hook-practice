import React, { useState, useEffect } from 'react'
const App = () => {
  useEffect(() => { console.log("我只印很多次"); })
  const [number, setNumber] = useState(0);
  const [string, setString] = useState("");
  const incrementHandler = () => {
    setNumber((prev) => (prev + 1));
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={incrementHandler}>+</button>
      <br />
      <input type="text" onChange={(e) => setString(e.target.value)} />
      <div>{string}</div>
    </div>
  );
}
export default App