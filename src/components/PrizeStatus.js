import { useLuckyDraw } from "../context/LuckyDrawContext";
import { PRIZE_COUNT } from "../context/LuckyDrawContext";

const PrizeStatus = () => {
    const { winners } = useLuckyDraw();

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${PRIZE_COUNT}, 1fr)`,
                gap: "10px",
            }}
        >
            {Array(PRIZE_COUNT)
                .fill()
                .map((_, index) => (
                    <div key={index} style={{ backgroundColor: "lightpink" }}>
                        Prize {index + 1} :
                        {winners[index]
                            ? ` Player ${winners[index]}`
                            : " Not yet won"}
                    </div>
                ))}
        </div>
    );
};

export default PrizeStatus;
