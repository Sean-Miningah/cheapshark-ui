import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

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
        <div className="w-full py-4">
            <Heading>Deals</Heading>
            {/* Render your deals here */}
            <div className="grid gap-2 grid-cols-2 md:grid-cols-3">
                {deals.map((deal: Deal) => (
                    <Link key={deal.dealID} to={`/deal/${deal.dealID}`} className="w-full">
                        <GameCard deal={deal} />
                    </Link>
                ))}
            </div>
        </div>
    );
}