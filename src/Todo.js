import React, { memo } from 'react'
const Todo = ({ listData, number }) => {
    console.log(number);
    return (
        <>
            {listData.map((element, index) => {
                return (<div key={index}>{element.content}</div>)
            })}
        </>
    )
}
export default memo(Todo);