import React, { useState } from 'react'
import Todo from './Todo';

const App = () => {
  const [number, setNumber] = useState(0);
  const [listData, setListData] = useState([{
    content: '要做的事情',
    id: Date.now(),
    done: false
  }])

  return (
    <>
      <div>{number}</div>
      <button onClick={() => {
        setNumber((prev) => (prev + 1));
      }}>+
      </button>
      <Todo listData={listData} />
    </>
  )
}

export default App