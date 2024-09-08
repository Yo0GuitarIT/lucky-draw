const Cell = ({ index, isSelect, handleCellClick, winningCells }) => {
  const handleClick = () => {
    handleCellClick(index);
    console.log(winningCells);
  };

  return (
    <div>
      <button disabled={isSelect} onClick={handleClick}>
        {isSelect ? (winningCells.includes(index) ? "🉐" : "🈚") : "❓"}
      </button>
    </div>
  );
};

export default Cell;
