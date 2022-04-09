

interface ChildProps{
    color:string;
    onClick:()=>void;
    children:null
}



// step 1
export const Child=({color,onClick,children}:ChildProps)=>{
   
   
   
   return <div>{color}
   {children}
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