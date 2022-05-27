import React, { useState, useEffect } from 'react'
const App = () => {
  const [timeCountdown, setCountdown] = useState(60);
  useEffect(() => {
    if (!timeCountdown) return;
    const intervalId = setInterval(() => {
      setCountdown((prev) => (prev - 1));
    }, 1000);

    return () => clearInterval(intervalId);

  }, [timeCountdown]);
  return (
    <div>
      <h1>{timeCountdown}</h1>
    </div>
  );
};

export default App;