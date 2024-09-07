import { useState } from "react";
import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PLayerStatus from "./PlayerStatue";
import PrizeStatus from "./prizeStatus";
import ResetButton from "./ResetButton";

const LuckyDraw = () => {
  const [cellsState, setCellState] = useState(Array(36).fill(false));
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const handleChangePlayer = (index) => {
    setCurrentPlayer((prev) => (prev % 6) + 1);
    setCellState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleReset = () => {
    setCurrentPlayer(1);
    setCellState(Array(36).fill(false));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Lucky draw</h2>

      <CurrentTurn currentPlayer={currentPlayer} />

      <GameBoard
        cellsState={cellsState}
        handleChangePlayer={handleChangePlayer}
      />
      <PLayerStatus />
      <PrizeStatus />
      <ResetButton handleReset={handleReset} />
    </div>
  );
};

export default LuckyDraw;
