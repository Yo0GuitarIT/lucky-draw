const Cell = ({ cellNumber }) => {
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
      }}
    >
      <p>{cellNumber}</p>
    </div>
  );
};

export default Cell;
