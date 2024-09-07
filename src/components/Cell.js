const Cell = ({ index, cellState, handleChangePlayer }) => {
  const handleClick = () => {
    handleChangePlayer(index);
  };

  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "lightgrey",
      }}
    >
      <p style={{ margin: "5px" }}>{cellState ? "✅" : "❌"}</p>
      <button disabled={cellState} onClick={handleClick}>
        ???
      </button>
    </div>
  );
};

export default Cell;
