import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ComponentOne = ()=>{
    return(
        <p>One</p>
    )
}

const ComponentTwo = ()=>{
    return(
        <p>Two</p>
    )
}

const ComponentThree = ()=>{
    return(
        <p>Three</p>
    )
}

const DisplayNumberComponent = (props)=>{
    const number = props.number;
    return(
        <div>
            {number == 1 && <ComponentOne/>}
            {number == 2 && <ComponentTwo/>}
            {number == 3 && <ComponentThree/>}
        </div>
    )
}


const ChangeNumber = ()=>{
    const [number, setNumber] = useState(0);

    const handleOnChange = (event) =>{
        setNumber(event.target.value)
    }
    
    useEffect((()=>{
        console.log(number)
        }),[number])


    return(
    <div className="App">
        <input name="num" type={"number"} min="1" max="3" onChange={handleOnChange} />
        <DisplayNumberComponent number={number}/>
    </div>
    )
}

export default ChangeNumber;