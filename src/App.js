import "./App.css";
import Navbar from "./components/Navbar";
import TooglerMode from "./components/TooglerMode";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import IntroEvent from "./components/IntroEvent";
import Activity from "./components/Activity";
import EventDetail from "./components/EventDetail";
import Speaker from "./components/Speaker";

function App() {
    return (
        <div className="App bg-slate-200 dark:bg-slate-900 w-screen h-screen">
            <TooglerMode />
            <Navbar />
            <Hero />
            <Countdown />
            <IntroEvent />
            <Activity />
            <EventDetail />
            <Speaker />
        </div>
    );
}

export default App;
