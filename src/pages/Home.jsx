import MovieCard from "../component/MovieCard";
import { getMovieAPIData } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieAPIData = async () => {
      try {
        const movies = await getMovieAPIData();
        setMovie(movies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    movieAPIData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="h-full w-10/12 flex flex-wrap flex-row border-2 border-red-600">
        {/* MOVIE POSTER DESIGN */}

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movie.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
