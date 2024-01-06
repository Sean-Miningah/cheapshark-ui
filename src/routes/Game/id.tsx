import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { GameLookUpData } from '@/types'
import { fetchGameLookup } from '@/api/games'

type RouteParams = {
    id: string
}

const Game: React.FC = () => {
    const [game, setGame] = useState<GameLookUpData | null>(null)
    const params = useParams<RouteParams>()
    const { id } = params

    useEffect(() => {
        if (id) {
            fetchGameLookup(id)
            .then((data: GameLookUpData) => setGame(data))
            .catch((error: any) => console.error(error))
        }
    }, [id])
  return (
    <div>
      <p>{game?.info.title}</p>
      <p>{game?.info.steamAppID}</p>
      <img src={game?.info.thumb} alt="picha" />

      <hr />

        <p>Deals</p>

        {game?.deals.length ? (
            <ul>
                {game?.deals.map((deal) => (
                    <li key={deal.dealID}>
                        <p>{deal.storeID}</p>
                        <p>{deal.price}</p>
                        <p>{deal.retailPrice}</p>
                        <p>{deal.savings}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No Deals</p>
        )}

    </div>
  )
}

export default Game 