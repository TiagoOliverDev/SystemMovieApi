import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/card/MovieCard"

import "./MovieGrid.css"
const searchURL = "https://api.themoviedb.org/3/search/movie/";
const apiKey = "api_key=4c57440a889728bf7ddefe0bc3eb145d";

const Search = () => {

    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q") //pegando o content do q na url

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryURL)
    }, [query])

    return (
        <div className="container" >
            <h2 className="title">
            Resultados para: <span className="query-text">{query}</span> </h2>
            <div className="movies-container" >
                {movies.length === 0 && <p>Carregando...</p>}
                {movies && movies.map((movie) => 
                    <MovieCard key={movie.id} movie={movie} />
                )}
            </div>
        </div>
    ) 
}

export default Search