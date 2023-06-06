import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BsWallet2, BsFillBarChartFill, BsFillCalendarFill, BsPencilSquare, BsHourglassSplit} from 'react-icons/bs'

import "./Movie.css"
import Moviecard from "../components/Moviecard";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {

    const {id} = useParams()
 
    const [movie, setMovie] = useState('')

    const getMovie = async(url) => {

        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMovie(data);
    }

    useEffect(() => {
        const topRatedURL = `${moviesURL}${id}?${apiKey}`;
        getMovie(topRatedURL)
    }, [])

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US",{
           style:"currency",
           currency:"USD",
        });
    }

    return (
    <div className="movie-page">
      {movie &&
        <><Moviecard movie={movie} showLink = {false} />
        <p className="tagline">{movie.tagline}</p>
        <div className="info-des"> 
            <h3><BsPencilSquare /> Descrição:</h3>
                <p>{movie.overview}</p>
        </div>
        <div className="info"> 
            <h3><BsWallet2 /> Orçamento:</h3>
                <p>{formatCurrency(movie.budget)}</p>
        </div>
        <div className="info"> 
            <h3><BsFillBarChartFill /> Receita:</h3>
                <p>{formatCurrency(movie.revenue)}</p>
        </div>
        <div className="info"> 
            <h3><BsFillCalendarFill /> Data de Lançamento:</h3>
                <p>{movie.release_date}</p>
        </div>
        <div className="info"> 
            <h3><BsHourglassSplit /> Tempo de Duração:</h3>
                <p>{movie.runtime} Minutos</p>
        </div>
        </>}
    </div>
 );

}

export default Movie