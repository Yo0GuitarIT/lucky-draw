const Cell = ({ cellNumber }) => {
  return (
    <div
      style={{
        height: "40px",
        width: "100%",
        backgroundColor: "lightgrey",
        display: "flex",
        alignItems: "center", // 垂直居中
        justifyContent: "center", // 水平居中
      }}
    >
      <h3 >{cellNumber}</h3>
    </div>
  );
};

export default Cell;
