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
import Timeline from "./index/Timeline";
import Contact from "./index/Contact";
import TargetAudience from "./index/TargetAudience";
import Topic from "./index/Topic";
import SponsorLogo from "./index/SponsorLogo";
import SeatingPreview from "./index/SeatingPreview";
import Schedule from "./index/Schedule";

class Home extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <Hero />
          <Countdown />
          <IntroEvent />
          {/* <Timeline /> */}
          <Topic />
          <Schedule />
          <TargetAudience />
          {/* <Speaker /> */}
          <EventDetail />
          <Package />
          <SeatingPreview />
          <SponsorLogo />
          {/* <Sponsor /> */}
          {/* <Activity /> */}
          {/* <Blog /> */}
          <Contact />
        </Layout>
      </>
    );
  }
}
export default Home;
