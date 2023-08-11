import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer, deletePlayer } from './ajaxHelpers';

const SinglePlayer = () => {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const fetchedPlayer = await fetchSinglePlayer(playerId);
        setPlayer(fetchedPlayer.data.player);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [playerId]);

  const handleDeletePlayer = async () => {
    try {
      await deletePlayer(playerId);
      // Redirect back to the AllPlayers page after deletion
      // You can use the React Router's history for navigation
      // For example: history.push('/all-players');
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!player) {
    return <div>No player data available.</div>;
  }

  return (
    <div className="single-player">
      <h1>Single Player Details</h1>
      <div>
        <h4>{player.name}</h4>
        <img src={player.imageUrl} alt={player.name} />
        <p>Breed: {player.breed}</p>
        {/* Display other player details here */}
        <button onClick={handleDeletePlayer}>Delete Player</button>
      </div>
    </div>
  );
};

export default SinglePlayer;



      