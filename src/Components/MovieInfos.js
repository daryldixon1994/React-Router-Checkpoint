import React from "react";
import { Link , useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { movieList } from "../datas/movieList";
import "../styles/MovieInfos.css";

function MovieInfos() {
    let {title}= useParams()

    const [movie, setMovie] = useState({});
    useEffect(() => {
        setMovie(movieList.find((movie) => movie.title === title));
    }, []);
    return (
        <div className="tb-infos">
            <h1>{movie.title}</h1>
            <div className="tb-infos-box-movie">
                  <iframe
          width="727"
          height="409"
          src={movie.src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
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
