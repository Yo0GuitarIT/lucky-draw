import { useState } from "react";
import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PLayerStatus from "./PlayerStatue";
import PrizeStatus from "./prizeStatus";
import ResetButton from "./ResetButton";

const LuckyDraw = () => {
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleChangePlayer = () => {
    setCurrentPlayer((prev) => (prev % 6) + 1);
  };

  const handleReset = () => {
    setCurrentPlayer(1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Lucky draw</h2>

      <CurrentTurn currentPlayer={currentPlayer} />
      
      <GameBoard handleChangePlayer={handleChangePlayer} />
      <PLayerStatus />
      <PrizeStatus />
      <ResetButton handleReset={handleReset} />
    </div>
  );
};

export default LuckyDraw;
