const PLayerStatus = ({ activePlayers, currentPlayer }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
        margin: "10px 0 10px 0",
      }}
    >
      {activePlayers.map((playerState, index) => (
        <div
          key={index}
          style={{
            backgroundColor: playerState ? "lightblue" : "grey",
            border: currentPlayer === index + 1 ? "2px solid red" : null,
          }}
        >
          <p>Player {index + 1}</p>
          <p>{playerState ? null : "won"}</p>
        </div>
      ))}
    </div>
  );
};

export default PLayerStatus;
