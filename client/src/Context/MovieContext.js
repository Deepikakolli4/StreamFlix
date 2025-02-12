import React, { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState(() => {
        const storedFavs = localStorage.getItem("favourites");
        return storedFavs ? JSON.parse(storedFavs) : [];
    });

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addToFavourites = (movie) => {
        setFavourites(prev => {
            if (!prev.some(m => m.imdbID === movie.imdbID)) {
                return [...prev, movie];
            }
            return prev;
        });
    };

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.imdbID !== movieId));
    };

    const isFavourite = (movieId) => {
        return favourites.some(movie => movie.imdbID === movieId);
    };

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
};
