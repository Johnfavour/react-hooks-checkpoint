import React, { useState } from 'react'
import './App.css'
import MovieCard from './Components/MovieCard/MovieCard'
import MovieList from './Components/MovieList/MovieList'
import Filter from './Components/Filter/Filter'

function App() {
  // State for storing movie data and filter criteria
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Description of Movie 1',
      posterURL: 'movie1.jpg',
      rating: 4.5,
    },
    // Add more movie objects as needed
  ]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  // Function to add a new movie
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Filtering logic
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
      <MovieCard addMovie={addMovie} />
    </div>
  );
}

export default App;

