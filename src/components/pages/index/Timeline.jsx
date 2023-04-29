import React from "react";
import { timeLine } from "../../data/data";

const Timeline = () => {
    return (
        <section id="timeline">
            <div className="container bg-white dark:bg-slate-900 h-auto mx-auto mb-16 p-4 relative">
                <div className="mb-8">
                    <div className="md:w-8/12 mx-auto text-center">
                        <h6 className="text-indigo-600 font-bold uppercase text-base">event timeline</h6>
                        <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">TIMELINE</h1>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                    {timeLine.map((event) => (
                        <React.Fragment key={event.index}>
                            {event.index % 2 === 1 ? (
                                <React.Fragment>
                                    <div className="col-span-4 w-full h-full">
                                        <div
                                            className={`w-full h-full bg-slate-50 dark:bg-slate-800 ${
                                                event.status === "done" ? "border-b-4 border-indigo-500" : event.status === "active" ? "border-b-4 border-teal-400" : "border-b-4 border-gray-400"
                                            } rounded-md p-2 pb-4 md:pl-4`}
                                        >
                                            <h1 className="dark:text-white text-xl font-medium py-2">{event.name}</h1>
                                            <p className="dark:text-white sm:text-sm text-xs">{event.desc}</p>
                                        </div>
                                    </div>
                                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                                        <div className={`h-full w-1 ${event.status === "done" ? "bg-indigo-500" : event.status === "active" ? "bg-teal-400" : "bg-gray-400"}`}></div>
                                        <div className={`absolute w-6 h-6 rounded-full ${event.status === "done" ? "bg-indigo-500" : event.status === "active" ? "bg-teal-400" : "bg-gray-400"} z-10 dark:text-white text-center`}>
                                            {event.index}
                                        </div>
                                    </div>
                                    <div className="col-span-4 w-full h-full"></div>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <div class="col-span-4 w-full h-full"></div>
                                    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                                        <div className={`h-full w-1 ${event.status === "done" ? "bg-indigo-500" : event.status === "active" ? "bg-teal-400" : "bg-gray-400"}`}></div>
                                        <div className={`absolute w-6 h-6 rounded-full ${event.status === "done" ? "bg-indigo-500" : event.status === "active" ? "bg-teal-500" : "bg-gray-400"} z-10 dark:text-white text-center`}>
                                            {event.index}
                                        </div>
                                    </div>
                                    <div class="col-span-4 w-full h-full ">
                                        <div
                                            className={`w-full h-full bg-slate-50 dark:bg-slate-800 ${
                                                event.status === "done" ? "border-b-4 border-indigo-500" : event.status === "active" ? "border-b-4 border-teal-400" : "border-b-4 border-gray-400"
                                            } rounded-md p-2 pb-4 md:pl-4`}
                                        >
                                            <h1 className="dark:text-white text-xl font-medium py-2">{event.name}</h1>
                                            <p className="dark:text-white sm:text-sm text-xs">{event.desc}</p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
