import React, { useState } from 'react'
import Todo from './Todo';

const App = () => {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState("");
  const [listData, setListData] = useState([{
    content: '要做的事情',
    id: Date.now(),
    done: false
  }])
  const test = {}
  return (
    <>
      <div>{number}</div>
      <button onClick={() => {
        setNumber((prev) => (prev + 1));
      }}>+
      </button>

      <input type="text" onChange={(e) => {
        setValue(e.target.value)
      }} value={value} />
      <button onClick={() => {
        setListData((prev) => {
          return [...prev, {
            content: value,
            id: Date.now(),
            done: false
          }]
        })

      }}>添加代辦事項</button>
      <Todo listData={listData} test={test} />
    </>
  )
}

export default App