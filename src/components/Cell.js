const Cell = ({ cellNumber, handleChangePlayer }) => {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
      }}
    >
      <button onClick={handleChangePlayer}>{cellNumber}</button>
    </div>
  );
};

export default Cell;
