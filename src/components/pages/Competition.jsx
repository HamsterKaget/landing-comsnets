import React from "react";
import Layout from "../layout/Layout";
import Hero from "./Competition/Hero";
import Countdown from "./Competition/Countdown";
import IntroEvent from "./Competition/IntroEvent";
import Topic from "./Competition/Topic";
import EventDetail from "./Competition/EventDetail";
import TeamCompotition from "./Competition/TeamComposition";
import Guide from "./Competition/Guide";
import IntroBaru from "./Competition/IntroBaru";


class Competition extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <Hero />
                    <Countdown />
                    <IntroBaru />
                    {/* <IntroEvent />
                    <Topic /> */}
                    <TeamCompotition />
                    <Guide />
                    <EventDetail />
                </Layout>
            </>
        );
    }
}
export default Competition;
