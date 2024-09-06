import Cell from "./components/cell";

const cells = [];
for (let i = 0; i < 36; i++) {
  cells.push(i);
}

const players = [];
for (let i = 0; i < 6; i++) {
  players.push(i + 1);
}

const prizes = [];
for (let i = 0; i < 3; i++) {
  prizes.push(i + 1);
}

function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Lucky draw</h1>
      </div>

      <div style={{ backgroundColor: "lightseagreen" }}>
        <h2>Current Player: Player 1</h2>
      </div>

      {/* <div style={{ width: "100%", padding: 0 }}> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "10px",
        }}
      >
        {cells.map((cell) => (
          <Cell key={cell} cellNumber={cell} />
        ))}
      </div>
      {/* </div> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "10px",
          margin: "10px 0 10px 0",
        }}
      >
        {players.map((player) => (
          <div style={{ backgroundColor: "lightblue" }}>
            <h3 style={{ textAlign: "center" }}>player: {player}</h3>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          margin: "10px 0 10px 0",
        }}
      >
        {prizes.map((prize) => (
          <div style={{ backgroundColor: "lightpink" }}>
            <h3 style={{ textAlign: "center" }}>prize: {prize}</h3>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", backgroundColor: "lightgrey" }}>
        <h1>Reset Game</h1>
      </div>

    </>
  );
}

export default App;
