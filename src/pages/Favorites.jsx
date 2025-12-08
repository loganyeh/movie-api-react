
function Favorites() {

    return(
        <>
            <div className="h-full w-10/12">
                <div className="h-2/12 w-full flex justify-center items-center border-2 border-red-600">Favorites Page</div>

                {/* FAV MOVIE CONTAINER */}
                <div id="favorite-movies-container" className="h-full w-full flex flex-wrap border-2 border-purple-600">

                    {/* MOVIE POSTER INSIDE FAV MOVIE CONTAINER */}
                    <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                        <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                        <div className="border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">MOVIE NAME</div>
                    </div>
                    <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                        <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                        <div className="border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">MOVIE NAME</div>
                    </div>
                    <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                        <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                        <div className="border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">MOVIE NAME</div>
                    </div>
                    <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                        <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                        <div className="border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">MOVIE NAME</div>
                    </div>
                    <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                        <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                        <div className="border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">MOVIE NAME</div>
                    </div>
                    <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                        <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                        <div className="border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">MOVIE NAME</div>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Favorites;