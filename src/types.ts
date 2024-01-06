export interface Deal {
    "internalName": string,
    "title": string,
    "metacriticLink": string,
    "dealID": string,
    "storeID": string,
    "gameID": string,
    "salePrice": string,
    "normalPrice": string,
    "isOnSale": string,
    "savings": string,
    "metacriticScore": string,
    "steamRatingText": string,
    "steamRatingPercent": string,
    "steamRatingCount": string,
    "steamAppID": string,
    "releaseDate": number,
    "lastChange": number,
    "dealRating": string,
    "thumb": string
}

export interface GameInfo {
    storeID: string;
    gameID: string;
    name: string;
    steamAppID: string;
    salePrice: string;
    retailPrice: string;
    steamRatingText: string;
    steamRatingPercent: string;
    steamRatingCount: string;
    metacriticScore: string;
    metacriticLink: string;
    releaseDate: number;
    publisher: string;
    steamworks: string;
    thumb: string;
}

export interface CheaperStore {
    dealID: string;
    storeID: string;
    salePrice: string;
    retailPrice: string;
}

export interface CheapestPrice {
    price: string;
    date: number;
}

export interface GameData {
    gameInfo: GameInfo;
    cheaperStores: CheaperStore[];
    cheapestPrice: CheapestPrice;
}

export interface Game {
    gameID: string; 
    steamAppID: string;
    cheapest: string;
    cheapestDealID: string;
    external: string;
    internalName: string;
    thumb: string;
}

export interface GameLookUpData {
    info: {
        title: string;
        steamAppID: string;
        thumb: string;
    },
    cheapestPriceEver: {
        price: string;
        date: number;
    },
    deals: {
        storeID: string;
        dealID: string;
        price: string;
        retailPrice: string;
        savings: string;
    }[]
}