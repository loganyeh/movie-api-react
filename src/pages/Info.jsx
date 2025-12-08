import { getMovieAPIData } from "../services/api";
import { useEffect } from "react";

function Info() {

    useEffect(() => {
        
        const fetchData = async () => {
            const data = await getMovieAPIData();
            console.log(data[0]);
            console.log(data[0].original_title);
            console.log(data[0].vote_average);
            console.log(data[0].poster_path);
        }

        fetchData();
    }, [])

    return(
        <>
            <div className="h-full w-10/12 text-2xl">
                <div className="h-2/12 w-full flex justify-center items-center border-2 border-red-600">Info Page</div>

            </div>
        </>
    )
}

export default Info;