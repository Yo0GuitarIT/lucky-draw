import { useLuckyDraw } from "../context/LuckyDrawContext";

const CurrentTurn = () => {
    const { currentPlayer } = useLuckyDraw();

    return (
        <div style={{ backgroundColor: "lightseagreen" }}>
            <p>Current Turn: Player {currentPlayer}</p>
        </div>
    );
};

export default CurrentTurn;
