import MovieCard from "../component/MovieCard";
import { getMovieAPIData } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const movieAPIData = async () => {
      try {
        const movies = await getMovieAPIData();
        setMovie(movies);
      } catch (error) {
        console.error(error);
      }
      finally{
        setLoading(false);
      }
    };

    movieAPIData();
  }, []);

    if(loading) return <div>Loading</div>;
    if(error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="h-full w-10/12 flex flex-wrap justify-around border-2 border-red-600">
        {/* MOVIE POSTER DESIGN */}
        {movie.map((movie, index) => (<MovieCard key={index} movie={movie} />))}
      </div>
    </>
  );
}

export default Home;
