import { createContext, useContext, useState } from "react";

export const LuckyDrawContext = createContext();

export const LuckyDrawProvider = ({ children }) => {
    // 紀錄獲勝玩家
    const [winners, setWinners] = useState([]);
    // 紀錄當前玩家 (1-6)
    const [currentPlayer, setCurrentPlayer] = useState(1);
    // 紀錄中獎的格子位置
    const [winningCells, setWinningCells] = useState([]);
    // 紀錄每個格子是否被選中
    const [cellsSelected, setCellsSelected] = useState(Array(36).fill(false));
    // 紀錄還在遊戲中的玩家
    const [activePlayers, setActivePlayers] = useState(Array(6).fill(true));
    // 紀錄遊戲進度 (entry, playing, over)
    const [gamePhase, setGamePhase] = useState("entry");

    // 點擊格子操作邏輯
    const handleCellClick = (index) => {
        // 遊戲結束時，直接返回
        if (gamePhase !== "playing") return;

        //更新選中的格子狀態
        setCellsSelected((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
        // 如果中獎
        if (winningCells.includes(index)) {
            handleWinner(currentPlayer);
        }
        // 更新當前玩家
        setCurrentPlayer(findNextPlayer(currentPlayer));
    };

    // 處理贏家邏輯
    const handleWinner = (winnerPlayer) => {
        setActivePlayers((prevState) => {
            const newState = [...prevState];
            newState[winnerPlayer - 1] = false;
            return newState;
        });

        setWinners((prevWinner) => {
            const newWinners = [...prevWinner, winnerPlayer];
            if (newWinners.length === 3) {
                setGamePhase("over");
            }
            return newWinners;
        });
    };

    // 尋找下一位玩家
    const findNextPlayer = (currentPlayer) => {
        let nextPlayer = currentPlayer;
        do {
            nextPlayer = (nextPlayer % 6) + 1;
        } while (
            !activePlayers[nextPlayer - 1] &&
            nextPlayer !== currentPlayer
        );
        return nextPlayer;
    };

    // 重置遊戲
    const handleReset = () => {
        setCellsSelected(Array(36).fill(false));
        setActivePlayers(Array(6).fill(true));
        setCurrentPlayer(1);
        setWinners([]);
        setGamePhase("entry");
        assignPrizes();
    };

    // 開始遊戲
    const startGame = () => {
        setGamePhase("playing");
        assignPrizes();
    };

    // 設定獲獎位置
    const assignPrizes = () => {
        const newPrize = [];
        while (newPrize.length < 3) {
            const randomPosition = Math.floor(Math.random() * 36);
            if (!newPrize.includes(randomPosition)) {
                newPrize.push(randomPosition);
            }
        }
        setWinningCells(newPrize);
    };

    return (
        <LuckyDrawContext.Provider
            value={{
                winners,
                setWinners,
                currentPlayer,
                setCurrentPlayer,
                winningCells,
                setWinningCells,
                cellsSelected,
                setCellsSelected,
                activePlayers,
                setActivePlayers,
                gamePhase,
                setGamePhase,
                handleCellClick,
                handleWinner,
                handleReset,
                startGame,
            }}
        >
            {children}
        </LuckyDrawContext.Provider>
    );
};

export const useLuckyDraw = () => {
    return useContext(LuckyDrawContext);
};
