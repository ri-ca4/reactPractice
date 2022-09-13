//usestate
//useeffect
//usecontext
//usereduucer
//useref


import React from "react";
import { useState } from "react";

const HooksPracticeComponent = ()=>{

    const [count, setCount] = useState(0)

    const handleClick = ()=> {
        setCount(count + 1);
    }

    console.log(count)

    return(
        <div>
                <button onClick={handleClick}>Click</button>
                counter value is {count}
        </div>
    )
}

export default HooksPracticeComponent;