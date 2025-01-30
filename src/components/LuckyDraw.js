import EntryScreen from "./EntryScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import { useLuckyDraw } from "../context/LuckyDrawContext";
import { Box, Flex } from "@radix-ui/themes";

const LuckyDraw = () => {
    const { gamePhase } = useLuckyDraw();

    return (
        <Box width="100vw" height="100vh">
            <Flex
                align="center"
                justify="center"
                height="100%"
                direction="column"
            >
                <Box>
                    {gamePhase === "entry" && <EntryScreen />}
                    {gamePhase === "playing" && <GameScreen />}
                    {gamePhase === "over" && <GameOverScreen />}
                </Box>
            </Flex>
        </Box>
    );
};

export default LuckyDraw;
