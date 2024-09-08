const players = [];
for (let i = 0; i < 6; i++) {
  players.push(i + 1);
}
const PLayerStatus = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "10px",
        margin: "10px 0 10px 0",
      }}
    >
      {players.map((player, index) => (
        <div key={index} style={{ backgroundColor: "lightblue" }}>
          <p>player: {player}</p>
        </div>
      ))}
    </div>
  );
};

export default PLayerStatus;
