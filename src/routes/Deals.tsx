import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GameCard from "@/components/GameCard";
import { fetchDataFromAPI } from "../api/deals";
import { Deal } from "@/types";


export default function Deals() {
    const [deals, setDeals] = useState<Deal[]>([]);

    useEffect(() => {
        fetchDataFromAPI()
            .then((data: Deal[]) => setDeals(data))
            .catch((error: any) => console.error(error));
    }, []);
    
    return (
        <div>
            <h1>Deals</h1>
            {/* Render your deals here */}
            <ul>
                {deals.map((deal: Deal) => (
                    <Link key={deal.dealID} to={`/deal/${deal.dealID}`}>
                        <GameCard deal={deal} />
                    </Link>
                ))}
            </ul>
        </div>
    );
}