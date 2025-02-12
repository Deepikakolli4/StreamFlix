import React from 'react';
import './MovieCard.css';
import { useMovieContext } from '../../Context/MovieContext';

const MovieCard = ({ movie }) => {
  const { addToFavourites,removeFromFavourites,isFavourite} = useMovieContext()
  const favorite = isFavourite(movie.imdbID)
 
  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavourites(movie.imdbID)
      else addToFavourites(movie)
    
  }

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.Poster} alt={movie.Title} />
        <div className='movie-overlay'>
          <button className={`favorite-btn ${favorite? "active": " "}`} onClick={onFavoriteClick}>
            ❤
          </button>
        </div>
      </div>
      <div className='movie-info'>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
