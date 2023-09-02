import React from 'react';

function MovieCard({title, description, posterUrl, rating }) {
  return (
    <div className="moviecard">
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default MovieCard;

