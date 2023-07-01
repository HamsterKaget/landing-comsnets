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
                    <div className="min-h-screen">
                        <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
                            <h1 className="text-white font-bold text-4xl shadow-sm">Become Our Partner</h1>
                        </div>
                        <div className="container max-w-[80vw] mb-8 rounded-lg bg-white dark:bg-slate-800 dark:text-slate-50 mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                            <div className="my-10 flex space-y-4 flex-col lg:mx-12 mx-4 text-center">
                                {/* <h1 className="text-3xl text-center dark:text-white uppercase">Coming Soon</h1> */}
                                <div className="mx-auto w-full h-full">
                                    <img src="/image/become-partner.png" alt="become-partner" className="w-full h-auto rounded-lg shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default Partnership;
