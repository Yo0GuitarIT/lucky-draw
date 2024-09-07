const CurrentTurn = ({ currentPlayer }) => {
  return (
    <div style={{ backgroundColor: "lightseagreen" }}>
      <p>Current Turn: Player {currentPlayer}</p>
    </div>
  );
};

export default CurrentTurn;
