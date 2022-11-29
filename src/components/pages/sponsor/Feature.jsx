import React from "react";
import { features } from "../../data/data";

const Feature = () => {
    return (
        <>
            <section id="feature" className="bg-slate-50 dark:bg-slate-800">
                <div className="container bg-slate-50 dark:bg-slate-800 h-auto mx-auto  mt-4 p-4 pb-16">
                    <div className="mt-8 mb-16">
                        <div className="md:w-8/12 mx-auto text-center">
                            <h6 className="text-indigo-600 font-bold uppercase text-base">Features</h6>
                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Main Features</h1>
                            <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                        {features.map((feature) => (
                            <div className="flex flex-col justify-center text-center bg-white dark:bg-slate-700 dark:text-slate-200 p-4 m-1 rounded-xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:bg-gradient-to-br from-indigo-500 to-purple-500 hover:text-white">
                                <img src={feature.image} alt="" className="w-[80%] mx-auto" />
                                <h6 className="font-semibold text-xl mb-2">{feature.feature}</h6>
                                <p className="mb-4">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;
