import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/ratings')
      .then(response => setRatings(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/ratings/${id}`)
      .then(() => setRatings(ratings.filter(rating => rating.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Movie Ratings</h1>
      <Link to="/add">Add Rating</Link>
      <ul>
        {ratings.map(rating => (
          <li key={rating.id}>
            {rating.movieName} - {rating.rating} stars
            <Link to={`/edit/${rating.id}`}>Edit</Link>
            <button onClick={() => handleDelete(rating.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;

