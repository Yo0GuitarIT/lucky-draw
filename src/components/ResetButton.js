const ResetButton = ({ handleReset }) => {
  return (
    <button style={{ margin: "10px" }} onClick={handleReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;
