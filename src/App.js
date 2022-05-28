import React, { useState } from "react";
import { UserContext } from './createUserContext';
import Elevator1 from './Elevator1'
const App = () => {
  const [user, setUser] = useState("Tim");
  console.log(UserContext);
  return (
    <>
      <UserContext.Provider value={user}>
        <Elevator1 />
      </UserContext.Provider>
    </>

  );
}

export default App