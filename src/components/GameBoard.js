import Cell from "./Cell";

const cells = [];
for (let i = 0; i < 36; i++) {
  cells.push(i);
}

const GameBoard = ({ handleChangePlayer}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
      }}
    >
      {cells.map((cell) => (
        <Cell key={cell} cellNumber={cell} handleChangePlayer={handleChangePlayer}/>
      ))}
    </div>
  );
};

export default GameBoard;
