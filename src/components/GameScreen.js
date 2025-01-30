import { Flex } from "@radix-ui/themes";
import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PlayerStatus from "./PlayerStatus";
import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";
import Title from "./Title";

const GameScreen = () => {
    return (
        <Flex direction="column" align="center">
            <Flex gap="9">
                <Title />
                <Flex direction='column' align='end' gap='2'>
                    <CurrentTurn />
                    <ResetButton />
                </Flex>
            </Flex>
            <PlayerStatus />
            <GameBoard />
            <PrizeStatus />
        </Flex>
    );
};

export default GameScreen;
