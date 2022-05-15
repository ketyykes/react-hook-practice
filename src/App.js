import React, { useState } from 'react'
const App = () => {
  let number = 123;
  const incrementHandler = () => {
    number +=1;
    console.log(number);
  };
  return (
    <div>
      <div>{number}</div>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App