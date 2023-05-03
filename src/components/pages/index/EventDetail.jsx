import React from "react";
import { MdDateRange, MdShareLocation, MdAssignment } from "react-icons/md";
import { eventDetails } from "../../data/data";

const EventDetail = () => {
    return (
        <>
            <section id="eventDetail" className=" bg-white dark:bg-slate-900 h-auto w-full">
                <div className="flex flex-wrap">
                    <div className="lg:w-6/12 w-full col-img"></div>
                    <div className="lg:w-6/12 py-5">
                        <div className="container">
                            <div className="md:w-10/12 mx-auto text-left mt-4">
                                {eventDetails.map((data) => (
                                    <>
                                        <div className="text-center">
                                            {/* <h6 className="text-indigo-600 font-bold text-base">{data.section}</h6> */}
                                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">{data.title}</h1>
                                            <p className="text-slate-500 mt-2 mb-6">{data.desc}</p>
                                        </div>

                                        <div className="flex my-8">
                                            <div className="mb-auto mx-4">
                                                <MdDateRange className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                                            </div>
                                            <div className="text">
                                                <p className="text-black dark:text-white font-bold text-xl">{data.title1}</p>
                                                <p className="text-slate-500">{data.desc1}</p>
                                            </div>
                                        </div>

                                        <div className="flex my-8">
                                            <div className="mb-auto mx-4">
                                                <MdShareLocation className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                                            </div>
                                            <div className="text">
                                                <p className="text-black dark:text-white font-bold text-xl">{data.title2}</p>
                                                <p className="text-slate-500">{data.desc2}</p>
                                            </div>
                                        </div>

                                        <div className="flex my-8">
                                            <div className="mb-auto mx-4">
                                                <MdAssignment className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                                            </div>
                                            <div className="text">
                                                <p className="text-black dark:text-white font-bold text-xl">{data.title3}</p>
                                                <p className="text-slate-500">{data.desc3}</p>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventDetail;
