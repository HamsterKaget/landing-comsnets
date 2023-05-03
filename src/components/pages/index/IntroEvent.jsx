import React from "react";
import { introEvents } from "../../data/data";

const IntroEvent = () => {
    return (
        <>
            <section id="intro">
                <div className="container bg-white dark:bg-slate-900 h-auto mx-auto lg:mt-20 mt-20 my-4 p-4">
                    {introEvents.map((data) => (
                        <>
                            <div className="mt-8">
                                <div className="md:w-8/12 mx-auto text-center">
                                    {/* <h6 className="text-indigo-600 font-bold uppercase text-base">{data.section}</h6> */}
                                    <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">{data.title}</h1>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="md:w-10/12 mx-auto text-left text-slate-500 dark:text-slate-400">
                                    <p className="event-description mt-12 my-8 text-center">
                                        {data.desc1}
                                        <br /> <br />
                                        {data.desc2}
                                        <br /> <br />
                                        {data.desc3}
                                        {/* <br /> <br />
                                        <br /> <br />
                                        {data.desc4} */}
                                    </p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    );
};

export default IntroEvent;
