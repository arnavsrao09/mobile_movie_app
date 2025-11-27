export const TMDB_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3/",
    API_KEY: process.env.EXPO_PUBLIC_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
    }  
}

export const fetchMovies = async ({query}: {query: string}) => {
    const endpoint = query?
    `/search/movie?query=${encodeURIComponent(query)}`:
    "/discover/movie?sort_by=popularity.desc";
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });
    if(!response.ok){
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
}



// const url = 'https://api.themoviedb.org/3/credit/credit_id';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjY2MTZkMzgwMTY2MGVkNGYzNDI1NWM1ZmRmZjVmYSIsIm5iZiI6MTc2NDIzNDgxOC40MzcsInN1YiI6IjY5MjgxNjQyZTJjNzlhYzVmZmMxMjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HJd1JcWGJhZZSVflx-qvStFXcO5dWGVVWY9X_ER2u3g'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));