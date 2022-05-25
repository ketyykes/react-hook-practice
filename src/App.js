import React, { useState, useEffect } from 'react'
const App = () => {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      const event = new Date();
      console.log(event.toUTCString());
    }, number * 2000);
  }, [number]);
  const clickHandler = () => {
    setNumber((pre) => (pre + 1));
  }
  return (
    <div>
      {number}
      <br />
      <button onClick={clickHandler}>按鈕</button>
    </div>
  )
}

export default App