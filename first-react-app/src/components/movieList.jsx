import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const MovieList = ()=>{
    const {movieList, loading} = useContext(GlobalContext);
    console.log(movieList)
    return (
        <div className="movieList">
            {loading && <span>loading! please wait</span>}
            {movieList && movieList.length > 0
                ? movieList.map((item)=> (
                    <div key={item.imdbID}>
                        <img src={item.Poster} alt="movie poster"/>
                        <p>{item.Title}</p>
                        <p>{item.Year}</p>
                    </div>
                )) 
            : null}
        </div>
    );
};

export default MovieList;