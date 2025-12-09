import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { searchMovie } from "../services/api";

function NavBar() {
  const { favArray, setFavArray, movies, setMovies, resetEffect, setResetEffect } = useContext(MyContext);
  const [inputValue, setInputValue] = useState('');

  function handleReset() {
    console.clear();
    setResetEffect((prev) => !prev);
    console.log(`console cleared. reset.`);
  }

  const handleInput = (event) => {
    setInputValue(event.target.value);
    // after searching clear the input field
  }

  const handleSearch = () => {
    console.log(`searching... ${inputValue}`);

    const retrieveSearchMovie = async (inputValue) => {
      const response = await searchMovie(inputValue);
      setMovies(response);
      // console.log(response);
      // console.log(typeof response);
    };

    retrieveSearchMovie();
  }

  return (
    <>
      <div className="h-full w-2/12 grid grid-rows-12 grid-cols-12 border-2 border-red-600">
            <input onChange={handleInput} className="row-start-2 row-end-3 col-start-2 col-end-12 text-2xl border-2 border-red-600" type="text" placeholder="Search for Movie..." />
            <button onClick={handleSearch} className="row-start-3 row-end-4 col-start-2 col-end-12 border-2 border-red-600 text-4xl hover:bg-gray-200 active:bg-gray-300 cursor-pointer">
              Search
            </button>
            <div className="flex justify-center items-center row-start-5 row-end-6 col-start-2 col-end-12 text-4xl border-2 border-red-600 hover:underline cursor-pointer">
              <Link to={'/'}>Home</Link>
            </div>
            <div className="flex justify-center items-center row-start-7 row-end-8 col-start-2 col-end-12 text-4xl border-2 border-red-600 hover:underline cursor-pointer">
              <Link to={'/favorites'}>Favorites</Link>
            </div>
            <div className="flex justify-center items-center row-start-9 row-end-10 col-start-2 col-end-12 text-4xl border-2 border-red-600 hover:underline cursor-pointer">
              <Link to={'/info'}>Info</Link>
            </div>
            <div onClick={handleReset} className="flex justify-center items-center row-start-11 row-end-12 col-start-2 col-end-12 text-4xl border-2 border-red-600 hover:underline cursor-pointer">
              Reset
            </div>
      </div>
    </>
  );
}

export default NavBar;
