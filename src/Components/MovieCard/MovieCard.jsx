// MovieCard.js
import React from 'react';
import './MovieCard.css'

function MovieCard({ movie }) {
  return (
    <div className="moviecard">
      
        <img src={movie.posterURL} alt={movie.title} style={{paddingTop: '15px'}}/>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p style={{paddingBottom:'15px'}}>Rating: {movie.rating}</p>
      
    </div>
  );
}

export default MovieCard;

