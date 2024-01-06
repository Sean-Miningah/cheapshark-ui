import { GameLookUpData, Game } from '../types'

const GAMES_API: string = 'https://www.cheapshark.com/api/1.0/games'

async function fetchGames(title: string | undefined): Promise<Game[]> {
    try {
        const response = await fetch(`${GAMES_API}?title=${title}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

async function fetchGameLookup(gameID: string): Promise<GameLookUpData> {
    try {
        const response = await fetch(`${GAMES_API}?id=${gameID}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

async function fetchMultipleGameLookup(gameIDs: string[]): Promise<GameLookUpData[]> {
    try {
        const response = await fetch(`${GAMES_API}?ids=${gameIDs}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export { fetchGames, fetchGameLookup, fetchMultipleGameLookup, GAMES_API}