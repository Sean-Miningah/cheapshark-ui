import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { dealLookUp } from "@/api/deals"
import { GameData } from "@/types"



type RouteParams = {
    id: string; 
}

const DealPage: React.FC = () => {
    const [deal, setDeal] = useState<GameData | null>(null);
    const params = useParams<RouteParams>();
    const { id } = params;

    useEffect(() => {
        if (id) {
            dealLookUp(id)
            .then((data: GameData) => setDeal(data))
            .catch((error: any) => console.error(error));
        }
    }, [id])

    return (
        <div>
            <p>{deal?.gameInfo.name}</p>

            <img src={deal?.gameInfo.thumb} alt="picha"/>

            <p>sale price : {deal?.gameInfo.salePrice}</p>
            <p>retail price : {deal?.gameInfo.retailPrice}</p>

            <hr />

            <p> CheaperStore </p>
 
            {deal?.cheaperStores.length ? (
                <ul>
                    {deal?.cheaperStores.map((store) => (
                        <li key={store.dealID}>
                            <p>{store.storeID}</p>
                            <p>{store.salePrice}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Cheaper Stores</p>
            )}


            <hr />

            <p>CheapestPrice</p>

            <div>{deal?.cheapestPrice.price}</div>
            <div>{deal?.cheapestPrice.date}</div>
        </div>
    )
}


export default DealPage