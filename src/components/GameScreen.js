import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PlayerStatus from "./PlayerStatus";
import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";

const GameScreen = () => {
    return (
        <>
            <CurrentTurn />
            <GameBoard />
            <PlayerStatus />
            <PrizeStatus />
            <ResetButton />
        </>
    );
};

export default GameScreen;
