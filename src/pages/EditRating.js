import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRatingById, updateRating } from '../apiUtils'; 

function EditRating() {
  const { ratingid } = useParams();
  const [movieName, setMovieName] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadRating = async () => {
      try {
        const data = await fetchRatingById(ratingid);
        setMovieName(data.movieName);
        setRating(data.rating);
      } catch (error) {
        console.error('Failed to fetch rating:', error);
      }
    };
    loadRating();
  }, [ratingid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRating(ratingid, { movieName, rating: parseInt(rating) });
      navigate('/');
    } catch (error) {
      console.error('Failed to update rating:', error);
    }
  };

  return (
    <div>
      <h1>Edit Rating</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie Name:</label>
          <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} required />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>
        <button type="submit">Update Rating</button>
      </form>
    </div>
  );
}

export default EditRating;
