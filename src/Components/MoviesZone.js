import MovieItem from "./MovieItem";
import "../styles/MoviesZone.css";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import StarRate from "./StarRate";
import AddMovie from "./AddMovie";

function MoviesZone({ search, movies, updateAdd, add, addMovie }) {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    useEffect(() => {
        setFilteredMovies(
            movies.filter((elt) =>
                elt.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, movies]);

    return (
        <div className="tb-zone">
            <StarRate
                rating={rating}
                setRating={setRating}
                hover={hover}
                setHover={setHover}
            />

            <ul className="tb-zone-movies">
                {filteredMovies.map(
                    ({ id, title, category, rate, cover, cast, release }) =>
                        !rating || rating === rate ? (
                            <div key={id}>
                                <MovieItem
                                    title={title}
                                    category={category}
                                    rate={rate}
                                    cover={cover}
                                    cast={cast}
                                    release={release}
                                    id={id}
                                />
                            </div>
                        ) : null
                )}
            </ul>
            <div className="tb-zone-movies">
                <button
                    className="tb-baner-add-btn"
                    onClick={() => updateAdd(false)}
                >
                    <FaPlus size={100} color={"red"} />
                </button>
            </div>
            {add ? null : (
                <AddMovie addMovie={addMovie} updateAdd={updateAdd} />
            )}
        </div>
    );
}

export default MoviesZone;
