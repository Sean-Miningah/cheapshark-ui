import React, { useEffect, useState } from 'react';

import { Game } from '@/types';
import { fetchGames } from '@/api/games';
import { Link } from 'react-router-dom';

const Games: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchGames("batman")
      .then((data: Game[] ) => setGames(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Games</h1>
      <ul>
        {games.map((game: Game) => (
          <Link key={game.gameID} to={`/game/${game.gameID}`}>
            <p>streamAppID : {game.steamAppID}</p>
            <p>cheapest : {game.cheapest}</p>
            <p>cheapest deal id: {game.cheapestDealID}</p>
            <p>external: {game.external}</p>
            <p>internal name: {game.internalName}</p>
            <img src={game.thumb} alt="picha" />
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Games