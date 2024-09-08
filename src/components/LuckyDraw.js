import { useEffect, useState } from "react";
import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PlayerStatus from "./PlayerStatus";
import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";

const LuckyDraw = () => {
  const [cellsState, setCellState] = useState(Array(36).fill(false));
  const [playersState, setPlayersState] = useState(Array(6).fill(true));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [winners, setWinners] = useState([]);
  const [prize, setPrize] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleCellClick = (index) => {
    if (isGameOver) return;

    setCellState((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    if (prize.includes(index)) {
      handleWinner(currentPlayer);
    }
    setCurrentPlayer(findNextPlayer(currentPlayer));
  };

  const handleWinner = (winnerPlayer) => {
    setPlayersState((prevState) => {
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
    } while (!playersState[nextPlayer - 1] && nextPlayer !== currentPlayer);
    return nextPlayer;
  };

  const handleReset = () => {
    setCellState(Array(36).fill(false));
    setPlayersState(Array(6).fill(true));
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
      <PlayerStatus playersState={playersState}  currentPlayer={currentPlayer}/>
      <PrizeStatus winners={winners} />
      <ResetButton handleReset={handleReset} />
      {isGameOver ? <div>Game Over!</div> : <div>Game Start!</div>}
    </div>
  );
};

export default LuckyDraw;
