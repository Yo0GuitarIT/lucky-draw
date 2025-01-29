import { createContext, useContext, useReducer } from "react";

export const LuckyDrawContext = createContext();

const initialState = {
    winners: [],
    currentPlayer: 1,
    winningCells: [],
    cellsSelected: Array(36).fill(false),
    activePlayers: Array(6).fill(true),
    gamePhase: "entry",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CELL_CLICK":
            if (state.gamePhase !== "playing") return state;

            const newCellsSelected = [...state.cellsSelected];
            newCellsSelected[action.index] = true;

            let newActivePlayers = [...state.activePlayers];
            let newWinners = [...state.winners];
            let newGamePhase = state.gamePhase;

            if (state.winningCells.includes(action.index)) {
                newActivePlayers[state.currentPlayer - 1] = false;
                newWinners = [...state.winners, state.currentPlayer];
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

const findNextPlayer = (currentPlayer, activePlayers) => {
    let nextPlayer = currentPlayer;
    do {
        nextPlayer = (nextPlayer % 6) + 1;
    } while (!activePlayers[nextPlayer - 1] && nextPlayer !== currentPlayer);
    return nextPlayer;
};

const assignPrizes = () => {
    const newPrize = [];
    while (newPrize.length < 3) {
        const randomPosition = Math.floor(Math.random() * 36);
        if (!newPrize.includes(randomPosition)) {
            newPrize.push(randomPosition);
        }
    }
    return newPrize;
};

export const LuckyDrawProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleCellClick = (index) => {
        dispatch({ type: "CELL_CLICK", index });
    };

    const startGame = () => {
        dispatch({ type: "START_GAME" });
    };

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
