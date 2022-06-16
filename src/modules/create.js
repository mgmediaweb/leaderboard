import Config from './config.js';

// function to create a new game into the API
const createGame = async (gameName = 'unknown', Storage) => {
  const game = {
    name: gameName,
  };

  const response = await fetch(`${Config.API}games/`, {
    method: 'POST',
    body: JSON.stringify(game),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const apiResponse = await response.json();

  let gameId = apiResponse.result.substr(14);
  gameId = gameId.substr(0, gameId.length - 7);

  const gameInfo = {
    name: gameName.charAt(0).toUpperCase() + gameName.slice(1).toLowerCase(),
    id: gameId,
  };

  Storage.set(gameInfo);
  window.location.reload();
};

export default createGame;