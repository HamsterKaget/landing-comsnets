import React from "react";
import Layout from "../layout/Layout";
import Sponsor from "./index/Sponsor";
import Contact from "./index/Contact";
import Hero from "./index/Hero";

class Partnership extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <Hero />
                    <Sponsor />
                    <Contact />
                </Layout>
            </>
        );
    }
}
export default Partnership;
