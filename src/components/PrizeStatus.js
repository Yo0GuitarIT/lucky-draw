const PrizeStatus = ({ winners }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {[0,1,2].map((index) => (
        <div key={index} style={{ backgroundColor: "lightpink" }}>
          Prize {index + 1}:{" "}
          {winners[index] ? `Player ${winners[index]}` : "Not yet won"}
        </div>
      ))}
    </div>
  );
};

export default PrizeStatus;
