import React from "react";
import Layout from "../layout/Layout";
import Hero from "./index/Hero";
import Countdown from "./index/Countdown";
import IntroEvent from "./index/IntroEvent";
import Activity from "./index/Activity";
import EventDetail from "./index/EventDetail";
import Speaker from "./index/Speaker";
import Package from "./index/Package";
import Sponsor from "./index/Sponsor";
import Blog from "./index/Blog";
import Contact from "./index/Contact";

class Home extends React.Component {
    render() {
        return (
            <>
                <Layout>
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
                </Layout>
            </>
        );
    }
}
export default Home;
