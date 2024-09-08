import { useEffect, useState } from "react";
import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PlayerStatus from "./PlayerStatus";
import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";

const LuckyDraw = () => {
  const [cellsSelected, setCellsSelected] = useState(Array(36).fill(false));
  const [activePlayers, setActivePlayers] = useState(Array(6).fill(true));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winners, setWinners] = useState([]);
  const [winningCells, setWinningCells] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleCellClick = (index) => {
    if (isGameOver) return;

    setCellsSelected((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    if (winningCells.includes(index)) {
      handleWinner(currentPlayer);
    }
    setCurrentPlayer(findNextPlayer(currentPlayer));
  };

  const handleWinner = (winnerPlayer) => {
    setActivePlayers((prevState) => {
      const newState = [...prevState];
      newState[winnerPlayer - 1] = false;
      return newState;
    });

    setWinners((prevWinner) => {
      const newWinners = [...prevWinner, winnerPlayer];
      if (newWinners.length === 3) {
        setIsGameOver(true);
      }
      return newWinners;
    });
  };

  const findNextPlayer = (currentPlayer) => {
    let nextPlayer = currentPlayer;
    do {
      nextPlayer = (nextPlayer % 6) + 1;
    } while (!activePlayers[nextPlayer - 1] && nextPlayer !== currentPlayer);
    return nextPlayer;
  };

  const handleReset = () => {
    setCellsSelected(Array(36).fill(false));
    setActivePlayers(Array(6).fill(true));
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
    setWinningCells(newPrize);
  };

  useEffect(() => {
    assignPrizes();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Lucky draw</h2>
      <CurrentTurn currentPlayer={currentPlayer} />
      <GameBoard
        cellsSelected={cellsSelected}
        handleCellClick={handleCellClick}
        winningCells={winningCells}
      />
      <PlayerStatus
        activePlayers={activePlayers}
        currentPlayer={currentPlayer}
      />
      <PrizeStatus winners={winners} />
      <ResetButton handleReset={handleReset} />
      <div style={{ color: "brown" }}>
        {isGameOver ? <h2>Game Over!</h2> : <h2>Game Start!</h2>}
      </div>
    </div>
  );
};

export default LuckyDraw;
