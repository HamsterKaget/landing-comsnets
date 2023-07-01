import React from "react";
import Layout from "../layout/Layout";
// import Package from "./sponsor/Package";
// import Faq from "./sponsor/Faq";
// import Feature from "./sponsor/Feature";
// import Hero from "./sponsor/Hero";
// import ListSponsor from "./sponsor/ListSponsor";
// import SponsorDetail from "./sponsor/SponsorDetail";

const Sponsor = () => {
    return (
        <>
            <Layout>
                {/* <Hero />
                <Feature />
                <SponsorDetail />
                <Package strip />
                <Faq />
                <ListSponsor /> */}
                <div className="min-h-screen">
                    <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
                        <h1 className="text-white font-bold text-4xl shadow-sm">Our Sponsor</h1>
                    </div>
                    <div className="container max-w-[80vw] mb-8 rounded-lg bg-white dark:bg-slate-800 dark:text-slate-50 mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                        <div className="my-10 flex space-y-4 flex-col mx-20 text-center">{/* <h1 className="text-3xl text-center dark:text-white uppercase">Coming Soon</h1> */}</div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Sponsor;
