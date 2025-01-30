import { useLuckyDraw } from "../context/LuckyDrawContext";
import Title from "./Title";
import { Text, Button, Flex } from "@radix-ui/themes";

const EntryScreen = () => {
    const { startGame } = useLuckyDraw();
    return (
        <Flex direction="column" align="center" justify="center" gap="2">
            <Title />
            <Text size="7" weight="regular">
                Welcome to Lucky Draw!
            </Text>
            <Text>Click the button below to start the game.</Text>
            <Button size="2" onClick={startGame}>
                Start Game
            </Button>
        </Flex>
    );
};

export default EntryScreen;
