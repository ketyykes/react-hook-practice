import React, { useState } from "react";
import Elevator1 from './Elevator1'
const App = () => {
  const [user, setUser] = useState("Tim");
  return (
    <>
      <Elevator1 user={user} />
    </>

  );
}

export default App