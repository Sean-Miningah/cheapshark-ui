import { Deal } from '../types'

async function fetchDataFromAPI(): Promise<Deal[]> {
    const apiUrl = 'https://www.cheapshark.com/api/1.0/deals'

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

export { fetchDataFromAPI }
