import React, { useReducer } from 'react';

function Counter() {
    const initialState = { count: 0 };
    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + action.payload };
            case 'decrement':
                return { count: state.count - action.payload };
            default:
                throw new Error();
        }
    }
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