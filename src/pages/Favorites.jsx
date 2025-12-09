import MovieCard from "../component/MovieCard";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Favorites() {
    const [movies, setMovies] = useState([]);
    const {favArray, setFavArray} = useContext(MyContext);


    return(
        <>
            <div className="h-full w-10/12">
                <div className="h-2/12 w-full flex justify-center items-center border-2 border-red-600">Favorites Page</div>

                {/* FAV MOVIE CONTAINER */}
                <div id="favorite-movies-container" className="h-full w-full flex flex-wrap border-2 border-purple-600">

                    {/* MOVIE POSTER INSIDE FAV MOVIE CONTAINER */}
                    {favArray.map((movie, index) => (<MovieCard movie={movie} key={index}/>))}

                </div>
                
            </div>
        </>
    )
}

export default Favorites;