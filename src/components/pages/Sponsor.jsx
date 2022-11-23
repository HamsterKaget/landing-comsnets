import React from "react";
import Layout from "../layout/Layout";
import Package from "./index/Package";
import Hero from "./sponsor/Hero";

const Sponsor = () => {
    return (
        <>
            <Layout>
                <Hero />
                <Package strip/>
            </Layout>
        </>
    );
};

export default Sponsor;
