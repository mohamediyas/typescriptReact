import React from 'react'
import { Child } from './Child'

const Parent = () => {
    return (
        <div>
            <Child onClick={()=>console.log("clicked")} color="green" />
        </div>
    )
}

export default Parent
