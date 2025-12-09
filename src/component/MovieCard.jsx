import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function MovieCard({ movie }) {
  const { favArray, setFavArray } = useContext(MyContext);
  const isFavorite = favArray.some((prev) => prev.id === movie.id);

  function handleFavoriteClick() {
    setFavArray((prev) => {
      if (prev.some((p) => p.id === movie.id)) {
        return prev.filter((p) => p.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  }

  return (
    <>
      <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
        <img
          className="h-full w-full row-start-1 row-end-11 col-start-1 col-end-13 object-cover rounded-t-2xl"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie1"
        />
        <div className="flex row-start-11 row-end-13 col-start-1 col-end-13">
          <div className="h-full w-3/6 flex justify-center items-center">
            {movie.title}
          </div>
          <div className="h-full w-2/6 flex justify-center items-center">
            {movie.vote_average.toFixed(1)}
          </div>
          <div
            onClick={handleFavoriteClick}
            className={`h-full w-1/6 flex justify-center items-center text-4xl hover:bg-red-600 active:bg-red-700 active:text-black rounded-br-2xl
              ${isFavorite ? 'bg-red-600 hover:bg-red-700 active:bg-red-500 text-white' : ''}
            `}
          >
            o
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
