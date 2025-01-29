import { useLuckyDraw } from "../context/LuckyDrawContext";

const ResetButton = () => {
    const { handleReset } = useLuckyDraw();
    return (
        <button style={{ margin: "10px" }} onClick={handleReset}>
            Reset Game
        </button>
    );
};

export default ResetButton;
