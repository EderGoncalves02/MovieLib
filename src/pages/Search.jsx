import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Moviecard from "../components/Moviecard";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './MovieGrid.css'

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movie, setMovies] = useState([]);
    const query = searchParams.get("q")

    const getSearchedMovies = async(url) => {

        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    }

    useEffect(() => {
        const searchLink = `${searchURL}?${apiKey}&query=${query}`;
        getSearchedMovies(searchLink)
    },[query])

 

    return (
        <div className="container">
   
        <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
        <div className="movies-container">{movie.length > 0 && movie.map(movie => <Moviecard key={movie.id} movie={movie} />)}</div>
    </div>
 )};


export default Search