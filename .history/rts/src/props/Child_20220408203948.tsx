import { JsxChild } from "typescript"


interface ChildProps{
    color:string;
    onClick:()=>void;
    children:any
}



// step 1
export const Child=({color,onClick,children}:ChildProps)=>{
   
//    while using children compulsary added interface
   
   return <div>{color}
   {children}
    {/* annotation */}
     <button onClick={onClick}>
          Click me
     </button>
    
    </div>
}

// step 2
// but we don't need to add interface
export const ChildFc:React.FC<ChildProps>=({color,children})=>{
    return <h1>{color} - {children}</h1>

}