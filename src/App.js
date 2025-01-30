import LuckyDraw from "./components/LuckyDraw";
import { LuckyDrawProvider } from "./context/LuckyDrawContext";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App() {
    return (
        <Theme>
            <LuckyDrawProvider>
                <LuckyDraw />
            </LuckyDrawProvider>
        </Theme>
    );
}

export default App;
