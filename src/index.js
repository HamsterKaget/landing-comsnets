import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/pages/Home";
import Soon from "./components/pages/Soon";
import Sponsor from "./components/pages/Sponsor";
import Partnership from "./components/pages/Partnership";
import ContactUs from "./components/pages/ContactUs";
import PrivacyPolice from "./components/pages/PrivacyPolice";
import Disclaimer from "./components/pages/Disclaimer";
import Comsnets from "./components/pages/AboutComsnet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/partnership" element={<Partnership />} />
                <Route path="/sponsor" element={<Sponsor />} />
                <Route path="/soon" element={<Soon />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolice />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/about-comsnets" element={<Comsnets />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
