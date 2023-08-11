// ajaxHelpers.js

export async function fetchAllPlayers() {
  try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch players');
    }

    const players = await response.json();
    return players;
  } catch (err) {
    console.error('Uh oh, trouble fetching players!', err);
    throw new Error('Error fetching players');
  }
}

export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${playerId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch the player');
    }

    const player = await response.json();
    return player;
  } catch (err) {
    console.error('Uh oh, trouble fetching the player!', err);
    throw new Error('Error fetching the player');
  }
}

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players/${playerId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to delete the player');
    }

    return true; // If successful, return true
  } catch (err) {
    console.error('Uh oh, trouble deleting the player!', err);
    throw new Error('Error deleting the player');
  }
}

export async function createNewPlayer(newPlayerData) {
  try {
    const response = await fetch(
      'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayerData),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to create a new player');
    }

    const newPlayer = await response.json();
    return newPlayer;
  } catch (err) {
    console.error('Uh oh, trouble creating a new player!', err);
    throw new Error('Error creating a new player');
  }
}
