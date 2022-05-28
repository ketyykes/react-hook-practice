import React from 'react'
import { UserContext } from './createUserContext'
const Elevator3 = () => {
    return (
        <>
            <UserContext.Consumer>
                {value => <h1>{value}</h1>}
            </UserContext.Consumer>
        </>
    )
}
export default Elevator3