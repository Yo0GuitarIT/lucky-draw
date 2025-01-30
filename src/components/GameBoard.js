import Cell from "./Cell";
import { useLuckyDraw } from "../context/LuckyDrawContext";
import { Box, Grid } from "@radix-ui/themes";

const GameBoard = () => {
    const { cellsSelected } = useLuckyDraw();
    return (
        <Box>
            <Grid columns="6" rows="6" gap="4">
                {cellsSelected.map((isSelect, index) => (
                    <Cell key={index} index={index} isSelect={isSelect} />
                ))}
            </Grid>
        </Box>
    );
};

export default GameBoard;
