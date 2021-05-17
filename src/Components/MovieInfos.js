import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { movieList } from "../datas/movieList";
import "../styles/MovieInfos.css";

function MovieInfos({ match }) {
    console.log(match);

    const [movie, setMovie] = useState({});
    useEffect(() => {
        setMovie(movieList.find((movie) => movie.title === match.params.title));
    }, [match.params.title]);
    return (
        <div className="tb-infos">
            <h1>{movie.title}</h1>
            <div className="tb-infos-box-movie">
                {movie.trailer}
                <p>{movie.description}</p>
            </div>
            <br />
            <Link to="/Movies">
                <button>Go Back</button>
            </Link>
        </div>
    );
}

export default MovieInfos;
