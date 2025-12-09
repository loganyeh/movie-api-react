import MovieCard from "../component/MovieCard";
import { MyContext } from "../context/MyContext";
import { getMovieAPIData } from "../services/api";
import { useEffect, useState, useContext } from "react";

function Home() {
  const { movies, setMovies, resetEffect, setResetEffect } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieAPIData = async () => {
      try {
        const movies = await getMovieAPIData();
        setMovies(movies);
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false);
      }
    };

    movieAPIData();
  }, [resetEffect]);

    if(loading) return <div>Loading</div>;
    if(error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="h-full w-10/12 flex flex-wrap justify-around border-2 border-red-600">
        {/* MOVIE POSTER DESIGN */}
        {movies.map((movie, index) => (<MovieCard key={index} movie={movie} />))}
      </div>
    </>
  );
}

export default Home;
