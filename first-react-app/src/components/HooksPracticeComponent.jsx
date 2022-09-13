//usestate
//useeffect
//usecontext
//usereduucer
//useref


import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Context } from "../App";

const HooksPracticeComponent = ()=>{

    // const [count, setCount] = useState(0);
    // const [flag, setFlag] = useState(false);

    // const handleClick = ()=> {
    //     setCount(count + 1);
    // }

    // useEffect((()=>{
    //     console.log("effect is called")
    // }),[])//=> componentdidmount/ called on load

    // useEffect((()=>{
    //     if(count === 5){
    //         setFlag(true)
    //     }
    // }),[count])//=> componentdidupdate

    // useEffect((()=>{
    //     return()=>{
    //         console.log('unmounted')
    //     }
    // }), )//=>componentwillunmount


    const getValueFromContext = useContext(Context)
    console.log(getValueFromContext)

    return(
            <div>
                <button style={{backgroundColor : getValueFromContext}}>Click</button>
            </div>
    )
}

export default HooksPracticeComponent;