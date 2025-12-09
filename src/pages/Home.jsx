import MovieCard from "../component/MovieCard";
import { getMovieAPIData } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const movieAPIData = async () => {
      try {
        const movies = await getMovieAPIData();
        setMovie(movies);
      } catch (error) {
        console.error(error);
      }
    };

    movieAPIData();
  }, []);

  return (
    <>
      <div className="h-full w-10/12 flex flex-wrap flex-row border-2 border-red-600">
        {/* MOVIE POSTER DESIGN */}
        {movie.map((movie, index) => {return <MovieCard key={index} movie={movie} />})}
      </div>
    </>
  );
}

export default Home;
