const matchData = require("../data/matchData");
const playerData = require("../data/playerData");

export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchDataObject) => {
  playerDataArray = Object.values(playerDataArray)
  // console.log(playerDataArray)
  return playerDataArray.map( player => {
    const currentWins = matchDataObject.reduce((p, c) => {
      console.log(player.gamerTag)
      console.log(c.winner)
      if(c.winner === player.gamerTag) {
        // console.log(p += 1);
        return p += 1;
      } else {
        return p;
      }
    }, 0);
  player.wins = currentWins;
  return player;
  })
}