import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext({
    searchParam : '',
    handleOnChange : () => {},
    handleSubmit : ()=> {},
    movieList : [],
    loading : false
})

const GlobalState = ({children})=> {

    const [searchParam, setSearchParam] = useState('')
    
    const handleOnChange = (event)=>{
        console.log(event.target.value);
        setSearchParam(event.target.value)
    }

    const handleSubmit= (event)=>{
        console.log(event.target)
    }

    const contextValue = {
        searchParam,
        handleOnChange,
        handleSubmit,
        movieList : [],
        loading : false
    }

    return(
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState