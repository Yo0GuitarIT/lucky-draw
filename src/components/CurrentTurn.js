import { Text } from "@radix-ui/themes";
import { useLuckyDraw } from "../context/LuckyDrawContext";

const CurrentTurn = () => {
    const { currentPlayer } = useLuckyDraw();

    return (
        
            <Text>Current Turn: Player {currentPlayer}</Text>
    );
};

export default CurrentTurn;
