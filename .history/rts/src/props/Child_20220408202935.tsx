

interface ChildProps{
    color:string;
}



// step 1
export const Child=({color,onClick}:ChildProps)=>{
   
   
   
   return <div>{color}
    {/* annotation */}
     <button onClick={onClick}>
          Click me
     </button>
    
    </div>
}

// step 2

export const ChildFc:React.FC<ChildProps>=({color})=>{
    return <h1>{color}</h1>

}