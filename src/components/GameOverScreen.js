import { Flex, Text } from "@radix-ui/themes";
import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";
import Title from "./Title";

const GameOverScreen = () => (
    <Flex direction="column" align="center">
        <Title/>
        <Text size='8'>Game Over!</Text>
        <PrizeStatus />
        <ResetButton />
    </Flex>
);

export default GameOverScreen;
