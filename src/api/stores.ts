import { Store } from '../types'

type T = any
const STORES_API: string = 'https://www.cheapshark.com/api/1.0/stores'

async function fetStoresInfo(): Promise<Store[]> {
    try {
        const response = await fetch(STORES_API)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}


async function fetchStoreLastChange(): Promise<T> {
    try {
        const response = await fetch(`${STORES_API}?lastChange=`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }

}

export { fetStoresInfo, fetchStoreLastChange, STORES_API }