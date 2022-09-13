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

    const parentComponentHandler = ()=>{
        console.log('hello from parent component')
    }


    return(
        <div>
            <Child/>
            This is a function based component
            <PropExample parentComponentHandler={parentComponentHandler} flag = {true} data = 'data as prop'/>
        </div>
    )
}

export default FunctionBasedComponent;