//usestate
//useeffect
//usecontext
//usereduucer
//useref


import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HooksPracticeComponent = ()=>{

    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    const handleClick = ()=> {
        setCount(count + 1);
    }

    useEffect((()=>{
        console.log("effect is called")
    }),[])//=> componentdidmount/ called on load

    useEffect((()=>{
        if(count === 5){
            setFlag(true)
        }
    }),[count])//=> componentdidupdate

    useEffect((()=>{
        return()=>{
            console.log('unmounted')
        }
    }), )//=>componentwillunmount

    return(
        <div>
                <button onClick={handleClick}>Click</button>
                counter value is {count}
                {
                    flag && <p>flag is true</p>
                }
        </div>
    )
}

export default HooksPracticeComponent;