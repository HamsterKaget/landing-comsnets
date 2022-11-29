import React from "react";
import Layout from "../layout/Layout";
import Package from "./sponsor/Package";
import Faq from "./sponsor/Faq";
import Feature from "./sponsor/Feature";
import Hero from "./sponsor/Hero";
import ListSponsor from "./sponsor/ListSponsor";
import SponsorDetail from "./sponsor/SponsorDetail";

const Sponsor = () => {
    return (
        <>
            <Layout>
                <Hero />
                <Feature />
                <SponsorDetail />
                <Package strip />
                <Faq />
                <ListSponsor />
            </Layout>
        </>
    );
};

export default Sponsor;
