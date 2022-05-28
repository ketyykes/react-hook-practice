import React, { useContext } from 'react'
import { UserContext } from './createUserContext'
const Elevator3 = () => {
    const name = useContext(UserContext);
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}
export default Elevator3