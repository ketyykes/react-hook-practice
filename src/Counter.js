import React, { useReducer } from 'react';
import reducer from './reducer';
import initialState from './initialState'
function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>-</button>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>+</button>
        </>
    );
}
export default Counter;