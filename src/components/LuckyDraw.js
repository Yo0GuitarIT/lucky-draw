import { useEffect, useState } from "react";
import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PlayerStatus from "./PlayerStatus";
import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";

const LuckyDraw = () => {
  // 紀錄格子狀態 
  const [cellsState, setCellState] = useState(Array(36).fill(false));
  // 當前抽獎的玩家
  const [currentPlayer, setCurrentPlayer] = useState(1);
  // 
  const [winners, setWinners] = useState([]);
  const [prize, setPrize] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleCellClick = (index) => {
    if (isGameOver || cellsState[index]) return;

    setCellState((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    if (prize.includes(index)) {
      handleWinner(currentPlayer);
      setCurrentPlayer((current) => (current % 6) + 1);
    } else {
      setCurrentPlayer((current) => (current % 6) + 1);
    }
  };

  const handleWinner = (winnerPlayer) => {
    setWinners((prevWinners) => {
      const newWinners = [...prevWinners, winnerPlayer];
      if (newWinners.length === 3) {
        setIsGameOver(true);
      }
      return newWinners;
    });
  };

  const handleReset = () => {
    setCellState(Array(36).fill(false));
    setCurrentPlayer(1);
    setWinners([]);
    setIsGameOver(false);
    assignPrizes();
  };

  const assignPrizes = () => {
    const newPrize = [];
    while (newPrize.length < 3) {
      const randomPosition = Math.floor(Math.random() * 36);
      if (!newPrize.includes(randomPosition)) {
        newPrize.push(randomPosition);
      }
    }
    setPrize(newPrize);
    console.log(newPrize);
  };

  useEffect(() => {
    assignPrizes();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Lucky draw</h2>
      <CurrentTurn currentPlayer={currentPlayer} />
      <GameBoard cellsState={cellsState} handleChangePlayer={handleCellClick} />
      <PlayerStatus />
      <PrizeStatus winners={winners} />
      <ResetButton handleReset={handleReset} />
      {isGameOver ? <div>Game Over!</div> : <div>Game Start!</div>}
    </div>
  );
};

export default LuckyDraw;
