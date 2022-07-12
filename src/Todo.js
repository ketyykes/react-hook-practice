import React from 'react'

const Todo = ({ listData }) => {
    console.log("test");
    return (
        <>
            {listData.map((element, index) => {
                return (<div key={index}>{element.content}</div>)
            })}
        </>
    )
}

export default Todo;