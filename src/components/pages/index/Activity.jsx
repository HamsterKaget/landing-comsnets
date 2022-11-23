import React from "react";
import { BsChatLeftText } from "react-icons/bs";
import { activities } from "../../data/data";

const Activity = () => {
    return (
        <>
            <section id="activity" className="bg-slate-50 dark:bg-slate-800">
                <div className="container h-auto mx-auto mt-8 p-4 pb-16">
                    <div className="mt-8">
                        <div className="md:w-8/12 mx-auto text-center">
                            <h6 className="text-indigo-600 font-bold text-base">Activity</h6>
                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">activity</h1>
                            <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                        </div>
                    </div>

                    <div className="text-center grid grid-cols-12 gap-5 gap-y-10 mt-14 mx-2 sm:mx-6">
                        {activities.map((activity) => (
                            <div
                                key={activity.id}
                                className="hover:-translate-y-4 h-auto col-span-12 lg:col-span-4 sm:col-span-6 p-4 mt-4 rounded-lg shadow-card hover:shadow-card2 bg-white dark:bg-slate-700 dark:hover:bg-indigo-600 hover:bg-indigo-600 group transition-all duration-300 ease-in"
                            >
                                <div className="-mt-12 bg-indigo-500 p-4 rounded-full inline-block text-white group-hover:rotate-[360deg] group-hover:text-indigo-500  group-hover:bg-white border-2 border-indigo-500 dark:group-hover:bg-slate-600 transition-all duration-300 ">
                                    <BsChatLeftText className="h-7 w-7 text-inherit font-bold " />
                                </div>
                                <div className="">
                                    <h5 className="my-2 font-bold text-xl group-hover:text-white dark:text-white">{activity.title}</h5>
                                    <p className="text-slate-500 mb-2 group-hover:text-white dark:text-slate-50 text-lg">{activity.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Activity;
