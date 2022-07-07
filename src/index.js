import { createRoot } from 'react-dom/client';
import React, { useContext, createContext, useReducer } from "react";

const numberContext = createContext();
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    case 'DECREMENT':
      return { count: state.count - 1 }
    default:
      return state;
  }
}
const incrementAction = {
  type: 'INCREMENT'
}
const decrementAction = {
  type: 'DECREMENT'
}

const Number = () => {
  const { state } = useContext(numberContext);
  console.log(state.count);
  return (
    <div>{state.count}</div>
  )
}

const Button = () => {
  const { dispatch } = useContext(numberContext);
  return (
    <div>
      <button onClick={() => (dispatch(incrementAction))}>+</button>
      <button onClick={() => (dispatch(decrementAction))} >-</button>
    </div >
  )
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <numberContext.Provider value={{
      state, dispatch
    }}>
      <Number />
      <Button />
    </numberContext.Provider>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  //   <React.StrictMode>
  <App />
  //   </React.StrictMode>
);
