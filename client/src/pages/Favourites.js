import React from 'react';
import '../pages/Favourites.css';
import { useMovieContext } from '../Context/MovieContext';
import MovieCard from '../Components/MovieCard/MovieCard';

const Favourites = () => {
  const { favourites } = useMovieContext(); // Corrected key name

  if (favourites.length > 0) {
    return ( 
      <div className='favorites'>
        <div className='movies-grid'>
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='favourites-empty'>
      <h2>No Favourites Yet!!!</h2>
      <p>Start Adding Movies to Your Favourites </p>
    </div>
  );
};

export default Favourites;
