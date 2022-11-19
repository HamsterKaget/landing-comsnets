import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TooglerMode from "./components/TooglerMode";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";

function App() {
    return (
        <div className="App bg-slate-200 dark:bg-slate-900 w-screen h-screen">
            <TooglerMode />
            <Navbar />
            <Hero />
            <Countdown />
        </div>
    );
}

export default App;
