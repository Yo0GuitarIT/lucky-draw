import { useLuckyDraw } from "../context/LuckyDrawContext";
import { Button } from "@radix-ui/themes";

const ResetButton = () => {
    const { handleReset } = useLuckyDraw();
    return <Button size='1' variant="outline" onClick={handleReset}>Reset Game</Button>;
};

export default ResetButton;
