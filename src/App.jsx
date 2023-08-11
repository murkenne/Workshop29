import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AllPlayers from './components/AllPlayers';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import './App.css';

export default function App() {
  const location = useLocation(); // Get the current route location

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/home">Home</Link>
          <Link to="/all-players">All Players</Link>
          <Link to="/single-player">Single Player</Link>
          <Link to="/new-player">New Player</Link>
        </div>
        {location.pathname === '/' && <SearchBar onSearch={(searchText) => console.log('Searching for:', searchText)} />} {/* Pass the onSearch function */}
        <div id="main-section">
          <Routes>
            {/* Route for the Home component */}
            <Route path="/home" element={<Home />} />
            {/* Route for the SinglePlayer component */}
            <Route path="/players/:playerId" element={<SinglePlayer />} />
            {/* Route for the NewPlayerForm component */}
            <Route path="/new-player" element={<NewPlayerForm />} />
            {/* Route for the AllPlayers component */}
            <Route path="/all-players" element={<AllPlayers />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
