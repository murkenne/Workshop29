import React, { useState } from 'react';
import { createNewPlayer } from './ajaxHelpers';

function NewPlayerForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPlayerData = {
      name,
      age: parseInt(age, 10),
      position,
    };

    try {
      const newPlayer = await createNewPlayer(newPlayerData);
      console.log('New player created:', newPlayer);
    } catch (err) {
      console.error('Error creating a new player:', err);
    }

    // Reset the form after submission by clearing the state
    setName('');
    setAge('');
    setPosition('');
  };

  return (
    <>
      <div className="new-player">
        <h1>New Player Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default NewPlayerForm;
