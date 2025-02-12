const API_KEY = "";
const BASE_URL = "http://www.omdbapi.com/?";

export const getPopularMovies = async (page = 1) => {
    const response = await fetch(`${BASE_URL}apikey=${API_KEY}&s=popular&page=${page}`);
    const data = await response.json();
    return data.Search || [];
};

export const searchMovies = async (query, page = 1) => {
    const response = await fetch(`${BASE_URL}apikey=${API_KEY}&s=${encodeURIComponent(query)}&page=${page}`);
    const data = await response.json();
    return data.Search || [];
};
