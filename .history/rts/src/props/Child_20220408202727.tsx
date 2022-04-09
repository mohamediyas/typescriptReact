

interface ChildProps{
    color:string;
}



// step 1
export const Child=({color}:ChildProps)=>{
    return <h1>{color}</h1>
}

// step 2

export const ChildFc:React.FC<ChildProps>=({color})=>{
    return <h1>{color}</h1>

}