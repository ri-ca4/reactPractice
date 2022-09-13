import React from "react";
import PropExample from "../PropExample";


const Child= ()=> {
    return(
        <p>
            (child component)
        </p>
    )
}

function FunctionBasedComponent(){
    
    const getValueFromChildComponent = (value)=>{
        console.log(value)
    }


    return(
        <div>
            <Child/>
            This is a function based component
            <PropExample getValueFromChildComponent={getValueFromChildComponent}/>
        </div>
    )
}

export default FunctionBasedComponent;