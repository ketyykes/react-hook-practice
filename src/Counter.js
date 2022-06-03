import React, { useReducer } from 'react';
import reducer from './reducer';
import initialState from './initialState'
import { increment, decrement } from './actionCreate';
function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(increment(1));
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch(increment(1))}>+</button>
            <button onClick={() => dispatch(decrement(1))}>-</button>
        </>
    );
}
export default Counter;