import React from "react";
import { useState,useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=1ab9083f";

const App = () =>{
    const [movies, setMovies] = useState([{}]);
    const [search, setSearch] =useState("");

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(()=>{
            searchMovies("dune");
    },[]);

    return (
        <div className="app">
            <h1>Movie Verse</h1>
            <div className="search">
                <input placeholder="Search your movies" value = {search} onChange={ (e)=>{setSearch(e.target.value) }}/>
                <img src={SearchIcon} alt="Search icon" onClick={() => {searchMovies(search)}} />
            </div>

            {movies.length > 0 ? (<div className="container">
                {movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>) : (<div className="empty">
                <h3>No Movies Found</h3>
            </div>)}
        </div>
    )
}
export default App;