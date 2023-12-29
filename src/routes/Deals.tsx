import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../api/deals";
import { Deal } from "../types";

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
                    <li key={deal.dealID}>
                        <h2>{deal.title}</h2>
                        <p>{deal.normalPrice}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}