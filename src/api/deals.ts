import { Deal, GameData } from '../types'

const API_URL: string = 'https://www.cheapshark.com/api/1.0/deals'

async function fetchDataFromAPI(): Promise<Deal[]> {

    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

async function dealLookUp(dealID: string): Promise<GameData> {
    try {
        const response = await fetch(`${API_URL}?id=${dealID}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export { fetchDataFromAPI, dealLookUp, API_URL }
