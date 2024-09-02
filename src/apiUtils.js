// src/apiUtils.js

const BASE_URL = 'http://localhost:5000/ratings';

export const fetchRatings = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch ratings failed:', error);
    throw error;
  }
};

export const fetchRatingById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch rating by ID failed:', error);
    throw error;
  }
};

export const addRating = async (rating) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Add rating failed:', error);
    throw error;
  }
};

export const updateRating = async (id, rating) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rating),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Update rating failed:', error);
    throw error;
  }
};

export const deleteRating = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok');
  } catch (error) {
    console.error('Delete rating failed:', error);
    throw error;
  }
};
