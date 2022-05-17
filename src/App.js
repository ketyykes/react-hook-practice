import React, { useState } from 'react'
const App = () => {
  const [string, setString] = useState(() => {
    console.log("被執行了");
    return 0;
  });
  const incrementHandler = () => {
    setString((prev) => (prev + 1));
  };
  return (
    <div>
      <div>{string}</div>
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App