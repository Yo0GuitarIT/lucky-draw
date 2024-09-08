import Cell from "./Cell";

const GameBoard = ({ cellsSelected,  handleCellClick,winningCells }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
      }}
    >
      {cellsSelected.map((isSelect, index) => (
        <Cell
          key={index}
          index={index}
          isSelect={isSelect}
          handleCellClick={handleCellClick}
          winningCells = {winningCells}
        />
      ))}
    </div>
  );
};

export default GameBoard;
