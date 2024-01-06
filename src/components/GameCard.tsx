import { 
    Card, 
    CardHeader, 
    Heading, 
    Image,
} from "@chakra-ui/react";

import { Deal } from "@/types"

type Props = {
    deal: Deal;
}

function GameCard({ deal }: Props) {
    return (
        <Card maxW="sm">
            <Image 
                src={deal.thumb} 
                alt={deal.title} 
                borderRadius="lg" 
                // boxSize='200px' 
                minW="80%"
                minH="120px"
                maxH="160px"
                objectFit="cover"
                />
            <CardHeader>
                <Heading size="md">{deal.title}</Heading>
            </CardHeader>
        </Card>
    )
}

export default GameCard;