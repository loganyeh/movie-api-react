
function Movies() {

    // ADD A RATING GRADE TO RIGHT OF MOVIE TITLE

    return (
        <>
            <div className="h-full w-10/12 flex flex-wrap flex-row border-2 border-red-600">
                {/* MOVIE POSTER DESIGN */}
                <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                    <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                    <div className="flex border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">
                        <div className="h-full w-1/2 border-2 border-red-600">MOVIE NAME</div>
                        <div className="h-full w-1/2 border-2 border-red-600">Rating</div>
                    </div>
                </div>
                <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                    <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                    <div className="flex border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">
                        <div className="h-full w-1/2 border-2 border-red-600">MOVIE NAME</div>
                        <div className="h-full w-1/2 border-2 border-red-600">Rating</div>
                    </div>
                </div>
                <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                    <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                    <div className="flex border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">
                        <div className="h-full w-1/2 border-2 border-red-600">MOVIE NAME</div>
                        <div className="h-full w-1/2 border-2 border-red-600">Rating</div>
                    </div>
                </div>
                <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                    <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                    <div className="flex border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">
                        <div className="h-full w-1/2 border-2 border-red-600">MOVIE NAME</div>
                        <div className="h-full w-1/2 border-2 border-red-600">Rating</div>
                    </div>
                </div>
                <div className="h-1/2 w-84.5 m-1 grid grid-rows-12 grid-cols-12 border-2 border-black rounded-2xl">
                    <img className="border-2 border-red-600 row-start-1 row-end-11 col-start-1 col-end-13" src="#" alt="movie1" />
                    <div className="flex border-2 border-red-600 row-start-11 row-end-13 col-start-1 col-end-13">
                        <div className="h-full w-1/2 border-2 border-red-600">MOVIE NAME</div>
                        <div className="h-full w-1/2 border-2 border-red-600">Rating</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies;