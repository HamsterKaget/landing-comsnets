import React from "react";
import Layout from "../layout/Layout";
import Hero from "./Competition/Hero";
import Countdown from "./Competition/Countdown";
import IntroEvent from "./Competition/IntroEvent";
import Topic from "./Competition/Topic";
import EventDetail from "./Competition/EventDetail";


class Competition extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <Hero />
                    <Countdown />
                    <IntroEvent />
                    <Topic />
                    <EventDetail />
                </Layout>
            </>
        );
    }
}
export default Competition;
