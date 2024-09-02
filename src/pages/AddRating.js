import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addRating } from '../apiUtils';

function AddRating() {
  const [movieName, setMovieName] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRating({ movieName, rating: parseInt(rating) });
      navigate('/');
    } catch (error) {
      console.error('Failed to add rating:', error);
    }
  };

  return (
    <div>
      <h1>Add Rating</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie Name:</label>
          <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} required />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
        <button type="submit">Add Rating</button>
      </form>
    </div>
  );
}

export default AddRating;
