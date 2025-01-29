import { createContext, useContext, useReducer } from "react";

export const LuckyDrawContext = createContext();

/**
 *  初始狀態
 * */
const initialState = {
    // 得獎者紀錄
    winners: [],
    // 當前玩家
    currentPlayer: 1,
    // 得獎格子
    winningCells: [],
    // 已選中格子
    cellsSelected: Array(36).fill(false),
    // 玩家狀態 true -> 玩家正在遊戲中  false -> 玩家遊戲結束
    activePlayers: Array(6).fill(true),
    // 遊戲階段 entry -> 遊戲未開始 playing -> 遊戲進行中 over -> 遊戲結束
    gamePhase: "entry",
};

/**
 * reducer 紀錄遊戲操作邏輯
 * @param {*} state
 * @param {*} action
 * @return {*} state
 */
const reducer = (state, action) => {
    const { type, index } = action;
    const { gamePhase, winners, currentPlayer, activePlayers, cellsSelected } =
        state;

    switch (type) {
        // 點擊格子
        case "CELL_CLICK":
            // 如果不是遊戲進行中，則不處理
            if (gamePhase !== "playing") return state;

            // 複製已選中格子
            const newCellsSelected = [...cellsSelected];
            newCellsSelected[index] = true;

            // 取得新的玩家狀態
            let newActivePlayers = [...activePlayers];
            // 取得新的得獎者
            let newWinners = [...winners];
            // 取得新的遊戲階段
            let newGamePhase = state.gamePhase;

            // 如果選中的格子是得獎格子
            if (state.winningCells.includes(index)) {
                // 將玩家狀態設為 false
                newActivePlayers[state.currentPlayer - 1] = false;
                // 將得獎者加入 winners
                newWinners = [...winners, currentPlayer];

                // 如果得獎者有 3 位，則遊戲結束
                if (newWinners.length === 3) {
                    newGamePhase = "over";
                }
            }

            const nextPlayer = findNextPlayer(
                state.currentPlayer,
                newActivePlayers
            );

            return {
                ...state,
                cellsSelected: newCellsSelected,
                activePlayers: newActivePlayers,
                winners: newWinners,
                currentPlayer: nextPlayer,
                gamePhase: newGamePhase,
            };

        case "START_GAME":
            return {
                ...state,
                gamePhase: "playing",
                winningCells: assignPrizes(),
            };

        case "RESET_GAME":
            return {
                ...initialState,
                winningCells: assignPrizes(),
            };

        default:
            return state;
    }
};

/**
 * 找到下一個玩家
 * @param {*} currentPlayer
 * @param {*} activePlayers
 * @returns
 */
const findNextPlayer = (currentPlayer, activePlayers) => {
    // 取得當前玩家
    let nextPlayer = currentPlayer;
    // 找到下一個玩家
    do {
        nextPlayer = (nextPlayer % 6) + 1;
        // 如果下一個玩家是在遊戲中的，則跳出迴圈
    } while (!activePlayers[nextPlayer - 1] && nextPlayer !== currentPlayer);
    return nextPlayer;
};

/**
 * 設置有獎格子
 * @return {Array} newPrize
 */
const assignPrizes = () => {
    const newPrize = [];
    // 產生 3 個不重複的數字
    while (newPrize.length < 3) {
        const randomPosition = Math.floor(Math.random() * 36);
        if (!newPrize.includes(randomPosition)) {
            // 將不重複的數字放入 newPrize
            newPrize.push(randomPosition);
        }
    }
    return newPrize;
};

/**
 * LuckyDrawProvider 提供遊戲邏輯
 * @param {*} children
 */
export const LuckyDrawProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // 點擊格子
    const handleCellClick = (index) => {
        dispatch({ type: "CELL_CLICK", index });
    };

    // 開始遊戲
    const startGame = () => {
        dispatch({ type: "START_GAME" });
    };

    // 重置遊戲
    const handleReset = () => {
        dispatch({ type: "RESET_GAME" });
    };

    return (
        <LuckyDrawContext.Provider
            value={{
                ...state,
                handleCellClick,
                startGame,
                handleReset,
            }}
        >
            {children}
        </LuckyDrawContext.Provider>
    );
};

export const useLuckyDraw = () => {
    return useContext(LuckyDrawContext);
};
