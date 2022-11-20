import "./App.css";
import Navbar from "./components/Navbar";
import TooglerMode from "./components/TooglerMode";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import IntroEvent from "./components/IntroEvent";
import Activity from "./components/Activity";
import EventDetail from "./components/EventDetail";
import Speaker from "./components/Speaker";
import Package from "./components/Package";
import Sponsor from "./components/Sponsor";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App w-screen h-screen">
            <TooglerMode />
            <Navbar />
            <Hero />
            <Countdown />
            <IntroEvent />
            <Activity />
            <EventDetail />
            <Speaker />
            <Package />
            <Sponsor />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
