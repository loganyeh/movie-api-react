import MovieCard from "../component/MovieCard";
import { getMovieAPIData } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
    const [movieArr, setMovieArr] = useState([]);

    useEffect(() => {
        const movieAPIData = async () => {
            try {
                const movies = await getMovieAPIData();
                setMovieArr(movies[0]);
                console.log(movies[0]);
            } catch (error) {
                console.error(error);
            }
        }

        movieAPIData();
    }, []);

    // console.log(movieArr.original_title);

    return (
        <>
            <div className="h-full w-10/12 flex flex-wrap flex-row border-2 border-red-600">
                {/* MOVIE POSTER DESIGN */}
                <MovieCard movie={movieArr}/>
            </div>
        </>
    )
}

export default Home;