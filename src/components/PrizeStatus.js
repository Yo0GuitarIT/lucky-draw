const PrizeStatus = ({ winners }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {Array(3)
        .fill()
        .map((_, index) => (
          <div key={index} style={{ backgroundColor: "lightpink" }}>
            Prize {index + 1} :
            {winners[index] ? ` Player ${winners[index]}` : " Not yet won"}
          </div>
        ))}
    </div>
  );
};

export default PrizeStatus;
