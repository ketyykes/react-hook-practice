import React, { useState, useEffect } from 'react'
const App = () => {
  console.log("我在AppFunction裡面");
  const [number, setNumber] = useState(0);
  const clickHandler = () => {
    setNumber((prev) => (prev + 1));
  }
  useEffect(() => {
    console.log("我在useEffect裡面");
    return () => {
      console.log("我在useEffect的callback裡面稱為clearup");
    }
  })
  return (
    <div>
      {number}
      {console.log("我在render函式裡面")}
      <button onClick={clickHandler}>+</button>
    </div>
  );

}