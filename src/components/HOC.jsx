import React,{ useState } from "react";

const hoc=(Comp)=>{
    function NewComponent() {
    const [x, setCount] = useState(0);
    const handleCount = ()=>{
       setCount(x+1);
    }
        return (
            <Comp value={x} increase={handleCount} />
        )
      }
      return NewComponent
}

export default hoc