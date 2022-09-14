//usestate
//useeffect
//usecontext
//usereduucer
//useref


import React from "react";
import { createRef } from "react";
import { useEffect } from "react";
// import { useReducer } from "react";
// import { useContext } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Context } from "../App";

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


    // const getValueFromContext = useContext(Context)
    // console.log(getValueFromContext)

    // const initialState = {
    //     flag : false
    // }

    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case 'TOGGLE_BUTTON':
    //             console.log(state);
    //             return {
    //                 ...state,
    //                 flag : !state.flag
    //             };

    //         default:
    //             return state;
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, initialState);

    const inputRef = createRef(null);

    useEffect(()=>{
        console.log(inputRef.current)
        inputRef.current.focus()
    },[])



    return(
            // <div>
            //     <button style={{backgroundColor : getValueFromContext}}>Click</button>
            // </div>
            // <div>
            //     <button onClick={()=> dispatch({type: "TOGGLE_BUTTON"})}>Toggle</button>
            // </div>
        <div>
            <input ref={inputRef} type="text" name="name" placeholder="name" />
        </div>

    )
}

export default HooksPracticeComponent;