import EntryScreen from "./EntryScreen";
import GameScreen from "./GameScreen";
import GameOverScreen from "./GameOverScreen";
import { useLuckyDraw } from "../context/LuckyDrawContext";

const LuckyDraw = () => {
    const { gamePhase } = useLuckyDraw();

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Lucky draw</h2>

            {gamePhase === "entry" && <EntryScreen />}
            {gamePhase === "playing" && <GameScreen />}
            {gamePhase === "over" && <GameOverScreen />}
        </div>
    );
};

export default LuckyDraw;
