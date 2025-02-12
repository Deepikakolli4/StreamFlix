import React, { useState, useEffect } from 'react';
import MovieCard from '../Components/MovieCard/MovieCard';
import './HomePage.css';
import { searchMovies, getPopularMovies } from '../Services/api';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // Track current page
    const [totalResults, setTotalResults] = useState(0); // Store total results for pagination

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                setLoading(true);
                const popularMovies = await getPopularMovies(page);
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load movies");
            } finally {
                setLoading(false);
            }
        };
        loadPopularMovies();
    }, [page]); // Re-fetch when the page changes

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim() || loading) return;
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery, page);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("Failed to search movies.");
        } finally {
            setLoading(false);
        }
    };

    const handleNextPage = () => {
        setPage((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input
                    type='text'
                    placeholder='Search for Movie'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button'>Search</button>
            </form>

            {error && <div className='error-message'>{error}</div>}

            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                <>
                    <div className='movies-grid'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.imdbID} />
                        ))}
                    </div>

                    <div className="pagination">
                        <button onClick={handlePrevPage} disabled={page === 1} className="page-button">
                            Previous
                        </button>
                        <span> Page {page} </span>
                        <button onClick={handleNextPage} className="page-button">
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomePage;
