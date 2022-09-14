import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = ()=>{

    const {searchParam, handleOnChange, handleSubmit} = useContext(GlobalContext);
    return (
        <div>
            <input name="search" 
            // value={searchParam} 
            onChange={handleOnChange} 
            placeholder="Enter Search" 
            type="text"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Search;