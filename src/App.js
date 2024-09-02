import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddRating from './pages/AddRating';
import EditRating from './pages/EditRating';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddRating />} />
        <Route path="/edit/:ratingid" element={<EditRating />} />
      </Routes>
    </Router>
  );
}

export default App;
