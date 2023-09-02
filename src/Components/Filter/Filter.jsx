import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleFilter = () => {
    // Ensure title and rating are not empty before applying the filter
    if (title.trim() !== '' || rating.trim() !== '') {
      onFilter({ title, rating });
      // Filter the movies based on title and rating
    }
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Enter movie title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Enter movie rating"
        value={rating}
        onChange={handleRatingChange}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default Filter;




