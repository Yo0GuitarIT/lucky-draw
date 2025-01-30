import { IconButton } from "@radix-ui/themes";
import { useLuckyDraw } from "../context/LuckyDrawContext";

const Cell = ({ index, isSelect }) => {
    const { handleCellClick, winningCells } = useLuckyDraw();
    
    const handleClick = () => {
        handleCellClick(index);
    };

    return (
        <IconButton
            color="gray"
            variant="outline"
            disabled={isSelect}
            size='3'
            onClick={handleClick}
        >
            {isSelect ? (winningCells.includes(index) ? "🉐" : "🈚") : "❓"}
        </IconButton>
    );
};

export default Cell;
