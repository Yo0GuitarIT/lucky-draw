const PrizeStatus = ({ winners = [] }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {winners.map((winner, index) => (
        <div key={index} style={{ backgroundColor: "lightpink" }}>
          Prize {index + 1}: {winner ? `Player ${winner}` : "Not yet won"}
        </div>
      ))}
    </div>
  );
};

export default PrizeStatus;
