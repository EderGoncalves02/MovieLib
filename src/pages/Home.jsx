import { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";
import './MovieGrid.css'

import {BiMoon} from 'react-icons/bi';
import { Link } from "react-router-dom"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY




const Home = () => {
    const formatLanguage = () => {
        return topMovies.toLocaleString("pt-BR");
    }
    const [topMovies, setTopMovies] = useState([])

    const getTopMovies = async(url) => {

        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
        formatLanguage(data.results)
        console.log(data.results)
    }

    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
        formatLanguage(topRatedURL)
        
        getTopMovies(topRatedURL)
    },[])

    
   

    return (
    <div id="content" className="container" >
        
   
        <h2 className="title">Melhores Filmes:</h2>
        <div className="movies-container">{topMovies.length > 0 && topMovies.map(movie => <Moviecard key={movie.id} movie={movie} />)}</div>
        
    </div>
 );

}
export default Home