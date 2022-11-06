import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

//const moviesUrl = process.env.API;
//const apikey = process.env.API_KEY;

import './MovieGrid.css'

const moviesUrl = "https://api.themoviedb.org/3/movie/";
const apikey = "api_key=4c57440a889728bf7ddefe0bc3eb145d";

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
        //console.log(data)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apikey}` 
        console.log(topRatedUrl)

        getTopRatedMovies(topRatedUrl)
    }, [])

    //console.log(moviesUrl, apikey)
    return (
        <div className="container" >
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container" >
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies && topMovies.map((movie) => 
                    <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    ) 
}

export default Home

