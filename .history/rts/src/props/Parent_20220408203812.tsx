import React from 'react'
import { Child } from './Child'

const Parent = () => {
    return (
        <div>
            <Child onClick={()=>console.log("clicked")} color="green" ><h1>Welcome</h1></Child>
        </div>
    )
}

export default Parent
