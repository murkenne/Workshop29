import React, { useState, useEffect } from 'react';
import { fetchAllPlayers } from './ajaxHelpers';
import SearchBar from './SearchBar'; // Import the SearchBar component

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPlayers = await fetchAllPlayers();
        setPlayers(fetchedPlayers.data.players);
        setFilteredPlayers(fetchedPlayers.data.players); // Initialize filtered players with all players
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterPlayers = (searchText) => {
    const filtered = players.filter(player =>
      player.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  const openPlayerDetails = (playerId) => {
    window.open(`/players/${playerId}`, '_blank'); // Open in a new tab/window
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(players)) {
    return <div>Invalid data format for players.</div>;
  }

  return (
    <div className="all-players">
      <h1>All Players</h1>
      <SearchBar onSearch={filterPlayers} /> {/* Pass the filterPlayers function */}
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <a href="#" onClick={() => openPlayerDetails(player.id)}>{player.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllPlayers;



