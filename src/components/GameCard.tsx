import { 
    Card, 
    CardHeader, 
    CardTitle, 
    CardDescription, 
    CardContent, 
    CardFooter
} from "./ui/card";

import { Deal } from "@/types"

type Props = {
    deal: Deal;
}

function GameCard({ deal }: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{deal.title}</CardTitle>
                <CardDescription>{deal.lastChange}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>price : <strong>{deal.salePrice}</strong></p>
                <p>normal price: <div>{deal.normalPrice}</div></p>
                <p>savings: <div>{deal.savings}</div></p>
                <p>is onsale: <div>{deal.isOnSale}</div></p>
            </CardContent>
            <CardFooter>
                <p>release date : <div>{deal.releaseDate}</div></p>
                <p>last change : <div>{deal.lastChange}</div></p>
            </CardFooter>

        </Card>
    )
}

export default GameCard;