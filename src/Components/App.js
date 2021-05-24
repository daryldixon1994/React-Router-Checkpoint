import Banner from "./Banner";
import MoviesZone from "./MoviesZone";
import { useState } from "react";
import { movieList } from "../datas/movieList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Components/Home";
import MovieInfos from "../Components/MovieInfos";

function App() {
    const [add, updateAdd] = useState(true);
    const [search, updateSearch] = useState("");
    const [movies, setMovies] = useState(movieList);

    const addMovie = (e, addedMovie) => {
        e.preventDefault();
        setMovies([...movies, addedMovie]);
    };

    console.log(search);
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <Banner updateSearch={updateSearch} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Movies">
                        <MoviesZone
                            updateAdd={updateAdd}
                            search={search}
                            movies={movies}
                            add={add}
                            addMovie={addMovie}
                        />
                    </Route>
                    <Route path={"/Movies/:title"} component={MovieInfos} />
                    <Route path="*" render={ ()=> <h1>Error page not found :/ </h1> } />
                </div>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
