const EntryScreen = ({ startGame }) => (
  <>
    <h3>Welcome to Lucky Draw!</h3>
    <p>Click the button below to start the game.</p>
    <button onClick={startGame}>Start Game</button>
  </>
);

export default EntryScreen;
