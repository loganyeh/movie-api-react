import MovieCard from "../component/MovieCard";
import { getMovieAPIData } from "../services/api";
import { useEffect, useState } from "react";

function Home() {

    useEffect(() => {
        const movieAPIData = async () => {
            const movies = await getMovieAPIData();
            
        }

        movieAPIData();
    }, []);

    return (
        <>
            <div className="h-full w-10/12 flex flex-wrap flex-row border-2 border-red-600">
                {/* MOVIE POSTER DESIGN */}
                <MovieCard />
            </div>
        </>
    )
}

export default Home;