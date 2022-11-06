import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import{
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarKTextFill,
} from "react-icons/bs"

import "./Movie.css"
import MovieCard from "../components/MovieCard";

const moviesUrl = "https://api.themoviedb.org/3/movie/";
const apikey = "api_key=4c57440a889728bf7ddefe0bc3eb145d";

const Movie = () => {

    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async(url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    const formatCurrency = (number) => {
        return number.tolocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {
        const movieUrl = `${moviesUrl}${id}?${apikey}`
        getMovie(movieUrl)
    }, [])

    return (
        <div className="movie-page" >
        {movie && (
            <>
             <MovieCard movie={movie} showLink={false} />
             <p className="tagline">{movie.tagline}</p>
             <div className="info">
                <h3>
                    <BsWallet2 /> Orçamento:
                </h3>
                <p>{movie.budget}</p>
             </div>
             <div className="info">
                <h3>
                    <BsGraphUp /> Receita:
                </h3>
                <p>{movie.revenue}</p>
             </div>
             <div className="info">
                <h3>
                    <BsHourglassSplit /> Duração:
                </h3>
                <p>{movie.runtime}</p>
             </div>
             <div className="info description">
                <h3>
                    <BsHourglassSplit /> Descrição:
                </h3>
                <p>{movie.overview}</p>
             </div>
            </>
        )}
        
        </div>
    ) 
}

export default Movie