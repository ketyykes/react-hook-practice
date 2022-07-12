import React, { memo } from 'react'
const Todo = ({ listData, number }) => {
    console.log(number);
    return (
        <>
            {number}
            {listData.map((element, index) => {
                return (<div key={index}>{element.content}</div>)
            })}
        </>
    )
}
export default memo(Todo, (prevProps, nextProps) => {
    return prevProps.listData === nextProps.listData
});