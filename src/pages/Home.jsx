import MovieCard from "../component/MovieCard";
import { getMovieAPIData } from "../services/api";
import { useEffect, useState } from "react";

function Home() {
  // const [movieArr, setMovieArr] = useState([]);
  const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //     const movieAPIData = async () => {
  //         try {
  //             const movies = await getMovieAPIData();
  //             setMovieArr(movies[0]);
  //             console.log(movies[0]);
  //         } catch (error) {
  //             console.error(error);
  //         }
  //     }

  //     movieAPIData();
  // }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movies = await getMovieAPIData();
        setMovie(movies[0]); // first movie
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, []);

  // console.log(movieArr.original_title);

  return (
    <>
      <div className="h-full w-10/12 flex flex-wrap flex-row border-2 border-red-600">
        {/* MOVIE POSTER DESIGN */}
        {/* <MovieCard movie={movieArr}/> */}
        <div className="container">{movie && <MovieCard movie={movie} />}</div>
      </div>
    </>
  );
}

export default Home;
