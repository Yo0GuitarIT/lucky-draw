import Cell from "./Cell";
import { useLuckyDraw } from "../context/LuckyDrawContext";

const GameBoard = () => {
    const { handleCellClick, winningCells, cellsSelected } = useLuckyDraw();
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "10px",
            }}
        >
            {cellsSelected.map((isSelect, index) => (
                <Cell
                    key={index}
                    index={index}
                    isSelect={isSelect}
                    handleCellClick={handleCellClick}
                    winningCells={winningCells}
                />
            ))}
        </div>
    );
};

export default GameBoard;
