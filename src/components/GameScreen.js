import CurrentTurn from "./CurrentTurn";
import GameBoard from "./GameBoard";
import PlayerStatus from "./PlayerStatus";
import PrizeStatus from "./PrizeStatus";
import ResetButton from "./ResetButton";

const GameScreen = ({
  currentPlayer,
  cellsSelected,
  handleCellClick,
  winningCells,
  activePlayers,
  winners,
  handleReset,
}) => (
  <>
    <CurrentTurn currentPlayer={currentPlayer} />
    <GameBoard
      cellsSelected={cellsSelected}
      handleCellClick={handleCellClick}
      winningCells={winningCells}
    />
    <PlayerStatus activePlayers={activePlayers} currentPlayer={currentPlayer} />
    <PrizeStatus winners={winners} />
    <ResetButton handleReset={handleReset} />
  </>
);

export default GameScreen;
