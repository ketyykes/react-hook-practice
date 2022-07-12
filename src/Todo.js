import React, { memo } from 'react'
const Todo = ({ listData, test }) => {
    console.log("我被執行了");
    return (
        <>
            {listData.map((element, index) => {
                return (<div key={index}>{element.content}</div>)
            })}
        </>
    )
}
export default memo(Todo);