import React from 'react';

function Player (prop) {
  console.log("match prop", prop);
  return(
  <article className="Player">
  <h1>{prop.firstName}<span>{prop.gamerTag}</span> {prop.lastName}</h1>
  {prop.wins === 0 && <h2 className="zero">Currently with {prop.wins} wins.</h2>}
  {prop.wins === 1 && <h2>Currently at 1 win</h2>}
  {prop.wins > 1 && <h2>Currently at 1+ wins</h2>}
  </article>
)
}

export default Player;