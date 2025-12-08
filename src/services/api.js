const API_KEY = `9a4328436b72c16256b4689299104f55`;

export const getMovieAPIData = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}