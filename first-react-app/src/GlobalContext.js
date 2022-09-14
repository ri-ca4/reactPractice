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

    const [searchParam, setSearchParam] = useState('');
    const [movieList, setMovieList] = useState([]);


    const handleOnChange = (event)=>{
        console.log(event.target.value);
        setSearchParam(event.target.value)
    }

    const handleSubmit= async()=>{
        // console.log(searchParam)
        const response = await fetch(`http://www.omdbapi.com/?s=${searchParam}&apikey=4e3aa94b`);
        const data = await response.json();
        console.log(data);
        if(data) setMovieList(data.Search)
    }

    const contextValue = {
        searchParam,
        handleOnChange,
        handleSubmit,
        movieList,
        loading : false
    }

    return(
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState