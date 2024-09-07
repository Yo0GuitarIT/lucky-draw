import CurrentTurn from "./components/CurrentTurn";
import GameBoard from "./components/GameBoard";
import PLayerStatus from "./components/PlayerStatue";
import PrizeStatus from "./components/prizeStatus";
import ResetButton from "./components/ResetButton";

const LuckyDraw = () => {
  const handleReset = () => {
    console.log("reset");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Lucky draw</h2>

      <CurrentTurn />
      <GameBoard />
      <PLayerStatus />
      <PrizeStatus />
      <ResetButton handleReset={handleReset} />
    </div>
  );
};

export default LuckyDraw;
