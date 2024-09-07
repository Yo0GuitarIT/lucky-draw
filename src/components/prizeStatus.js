const prizes = [];
for (let i = 0; i < 3; i++) {
  prizes.push(i + 1);
}

const PrizeStatus = () => {
  console.log("prize status refresh");
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {prizes.map((prize, index) => (
        <div key={index} style={{ backgroundColor: "lightpink" }}>
          <p style={{margin: "5px" }}>prize: prize</p>
          <p style={{margin: "5px" }}>winner is player 1</p>
        </div>
      ))}
    </div>
  );
};

export default PrizeStatus;
