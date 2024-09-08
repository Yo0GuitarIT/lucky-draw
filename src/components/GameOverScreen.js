import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";

const GameOverScreen = ({ winners, handleReset }) => (
  <div>
    <h3>Game Over!</h3>
    <PrizeStatus winners={winners} />
    <ResetButton handleReset={handleReset} />
  </div>
);

export default GameOverScreen;
