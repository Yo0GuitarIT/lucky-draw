import { Card, Text, Box, Flex } from "@radix-ui/themes";
import { useLuckyDraw } from "../context/LuckyDrawContext";

const PLayerStatus = () => {
    const { currentPlayer, activePlayers } = useLuckyDraw();
    return (
        <Flex gap="2" my="2">
            {activePlayers.map((playerState, index) => (
                <Card>
                    <Box
                        height="3rem"
                        width="4rem"
                        align="center"
                        justify="center"
                    >
                        <Text
                            as="div"
                            size="2"
                            weight={
                                currentPlayer === index + 1 ? "bold" : "normal"
                            }
                            color={currentPlayer === index + 1 ? "red" : "grey"}
                        >
                            Player {index + 1}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            {playerState ? null : "winner"}
                        </Text>
                    </Box>
                </Card>
            ))}
        </Flex>
    );
};

export default PLayerStatus;
