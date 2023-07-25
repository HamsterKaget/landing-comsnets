import React from "react";
import { introEvents } from "../../data/competition";

const IntroBaru = () => {
    function renderHTML(html) {
        return React.createElement("p", { dangerouslySetInnerHTML: { __html: html } });
    }

    return (
        <>
            <section id="intro" className="pt-36">
                <div className="container bg-white dark:bg-slate-900 h-auto mx-auto lg:mt-20 mt-20 my-4 p-4">
                    <div className="lg:w-9/12 mx-auto py-5 text-center">
                        <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white pb-6">Introduction</h1>
                        <img src="/image/competition-intro.png" alt="" className="rounded-xl w-full h-auto"/>
                    </div>
                    <div className="lg:w-9/12 mx-auto py-5 text-center">
                        <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white pb-6"></h1>
                        <img src="/image/competition-topic.png" alt="" className="rounded-xl w-full h-auto"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IntroBaru;
