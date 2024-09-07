import Cell from "./Cell";

const GameBoard = ({ cellsState, handleChangePlayer }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
      }}
    >
      {cellsState.map((cellState,index) => (
       
        <Cell
          key={index}
          index = {index}
          cellState={cellState}
          handleChangePlayer={handleChangePlayer}

        />
      ))}
    </div>
  );
};

export default GameBoard;
