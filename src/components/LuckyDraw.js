import { useEffect, useState } from "react";
import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PLayerStatus from "./PlayerStatue";
import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";

const LuckyDraw = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [cellsState, setCellState] = useState(Array(36).fill(false));
  const [currentPlayer, setCurrentPlayer] = useState(1);

  /**
   * true => 遊戲中
   * false => 中獎退出遊戲
   */
  const [playerState, setPlayerState] = useState(Array(6).fill(true));

  // 紀錄得獎玩家
  const [winners, setWinners] = useState(Array(3).fill(null));

  // 紀錄有獎的位置
  const [prize, setPrize] = useState(Array(3));

  const handleCellClick = (index) => {
    if (!isPlaying) return;

    setCellState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    // 中獎情況
    if (prize.includes(index)) {
      handleWinner(currentPlayer);
    } else {
      setCurrentPlayer(findNextPlayer(currentPlayer));
    }
  };

  const handleWinner = (winnerPlayer) => {
    console.log(`winner is player ${winnerPlayer}`);
    setPlayerState((prevState) => {
      const newState = [...prevState];
      newState[winnerPlayer - 1] = false;
      return newState;
    });

    setWinners((prevWinners) => {
      const newWinners = [...prevWinners];
      const emptyIndex = newWinners.findIndex((w) => w === null);
      if (emptyIndex !== -1) {
        newWinners[emptyIndex] = winnerPlayer;
      }
      return newWinners;
    });

    checkGameEnd();
  };

  const findNextPlayer = (currentPlayer) => {
    let nextPlayer = currentPlayer;
    do {
      nextPlayer = (nextPlayer % 6) + 1;
    } while (!playerState[nextPlayer - 1] && nextPlayer !== currentPlayer);
    return nextPlayer;
  };

  const checkGameEnd = () => {
    if (winners.every((w) => w !== null) || playerState.every((p) => !p)) {
      setIsPlaying(false);
      console.log("Game Over!");
    }
  };

  const handleReset = () => {
    setIsPlaying(true);
    setCurrentPlayer(1);
    setCellState(Array(36).fill(false));
    setPlayerState(Array(6).fill(true));
    setWinners(Array(3).fill(null));
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
    console.log(newPrize);
    setPrize(newPrize);
  };

  useEffect(() => {
    assignPrizes();
    setWinners(Array(3).fill(null));
  }, []); // 空依賴數組，只在組件掛載時運行

  useEffect(() => {
    if (!isPlaying) {
      console.log(
        "Game has ended. Winners:",
        winners.filter((w) => w !== null)
      );
    }
  }, [isPlaying, winners]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Lucky draw</h2>

      <CurrentTurn currentPlayer={currentPlayer} />
      <GameBoard cellsState={cellsState} handleChangePlayer={handleCellClick} />
      <PLayerStatus />
      <PrizeStatus winners={winners || []} />
      <ResetButton handleReset={handleReset} />
    </div>
  );
};

export default LuckyDraw;
