import LuckyDraw from "./components/LuckyDraw";
import { LuckyDrawProvider } from "./context/LuckyDrawContext";

function App() {
    return (
        <LuckyDrawProvider>
            <LuckyDraw />
        </LuckyDrawProvider>
    );
}

export default App;
