import React from "react";
import { MdDateRange, MdShareLocation, MdAssignment } from "react-icons/md";

const EventDetail = () => {
    return (
        <>
            <section id="eventDetail" className=" bg-white dark:bg-slate-900 h-auto w-full">
                <div className="flex flex-wrap">
                    <div className="lg:w-6/12 w-full col-img"></div>
                    <div className="lg:w-6/12 py-5">
                        <div className="container">
                            <div className="md:w-10/12 mx-auto text-left mt-4">
                                <div className="text-center">
                                    <h6 className="text-indigo-600 font-bold text-base">Event Detail</h6>
                                    <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Comsnets Gathering 2023</h1>
                                    <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                                </div>

                                <div className="flex my-8">
                                    <div className="mb-auto mx-4">
                                        <MdDateRange className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                                    </div>
                                    <div className="text">
                                        <p className="text-black dark:text-white font-bold text-xl">Date & Time</p>
                                        <p className="text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum perspiciatis amet omnis consectetur laudantium alias</p>
                                    </div>
                                </div>

                                <div className="flex my-8">
                                    <div className="mb-auto mx-4">
                                        <MdShareLocation className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                                    </div>
                                    <div className="text">
                                        <p className="text-black dark:text-white font-bold text-xl">Location</p>
                                        <p className="text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum perspiciatis amet omnis consectetur laudantium alias</p>
                                    </div>
                                </div>

                                <div className="flex my-8">
                                    <div className="mb-auto mx-4">
                                        <MdAssignment className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                                    </div>
                                    <div className="text">
                                        <p className="text-black dark:text-white font-bold text-xl">Requirements</p>
                                        <p className="text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum perspiciatis amet omnis consectetur laudantium alias</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventDetail;
