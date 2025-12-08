import MovieCard from "../component/MovieCard";

function Home() {

    // ADD A RATING GRADE TO RIGHT OF MOVIE TITLE

    return (
        <>
            <div className="h-full w-10/12 flex flex-wrap flex-row border-2 border-red-600">
                {/* MOVIE POSTER DESIGN */}
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>
    )
}

export default Home;