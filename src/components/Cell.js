const Cell = ({ index, cellState, handleChangePlayer }) => {
  const handleClick = () => {
    handleChangePlayer(index);
  };

  return (
    <div>
      <button disabled={cellState} onClick={handleClick}>
        {cellState ? "✅" : "❌"}
      </button>
    </div>
  );
};

export default Cell;
