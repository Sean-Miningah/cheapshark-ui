import { 
    Card, 
    CardHeader, 
    Heading, 
    Image,
    CardBody,
    Stack,
    StackDivider,
    Text, 
    Box
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

            <CardBody>
                <Stack divider={<StackDivider borderColor="gray.200" />} spacing={3}>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Summaries
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {deal.isOnSale ? "On Sale" : "Not on Sale"}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Price
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {deal.salePrice} USD
                        </Text>
                    </Box>
                    <Box>
                        <Heading size="xs" textTransform="uppercase">
                            Normal Price
                        </Heading>
                        <Text pt="2" fontSize="sm">
                            {deal.normalPrice} USD
                        </Text>
                    </Box>
                </Stack>

            </CardBody>
        </Card>
    )
}

export default GameCard;