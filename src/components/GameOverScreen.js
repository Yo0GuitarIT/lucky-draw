import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";

const GameOverScreen = () => (
    <div>
        <h3>Game Over!</h3>
        <PrizeStatus />
        <ResetButton />
    </div>
);

export default GameOverScreen;
