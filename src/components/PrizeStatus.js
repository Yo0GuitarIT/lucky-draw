import { Card, Flex, Text, Box } from "@radix-ui/themes";
import { useLuckyDraw } from "../context/LuckyDrawContext";

const PrizeStatus = () => {
    const { winners } = useLuckyDraw();

    return (
        <Flex gap="2" my="2">
            {Array(3)
                .fill()
                .map((_, index) => (
                    <Card>
                        <Box width="10rem">
                            <Text as="div" size="2">
                                Prize {index + 1} :
                            </Text>
                            <Text
                                as="div"
                                size="2"
                                color={winners[index] ? "green" : "grey"}
                            >
                                {winners[index]
                                    ? ` Player ${winners[index]}`
                                    : " Not yet won"}
                            </Text>
                        </Box>
                    </Card>
                ))}
        </Flex>
    );
};

export default PrizeStatus;
