import React from "react";
import { BsCheck } from "react-icons/bs";
import { pricing } from "../../data/data";

const Package = () => {
    return (
        <>
            <section id="speaker" className="bg-white dark:bg-slate-900 ">
                <div className="container h-auto mx-auto p-4">
                    <div className="my-8">
                        <div className="md:w-8/12 mx-auto text-center">
                            <h6 className="text-indigo-600 font-bold text-base">Pricing</h6>
                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Package Pricing</h1>
                            <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                        </div>
                    </div>

                    <div className="w-[95%] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-12 lg:gap-8 py-12">
                        {pricing.map((plan) => (
                            <div
                                key={plan.title}
                                className="relative border border-slate-200 dark:border-indigo-500 dark:bg-slate-700 rounded-2xl dark:text-white shadow-card2 p-8 text-left flex flex-col hover:-translate-y-6 transition-all duration-500"
                            >
                                <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
                                {plan.mostPopular && <p className="absolute top-0 bg-indigo-600 text-white px-5 py-0.5 tracking-wide rounded-full shadow-md -translate-y-1/2">Most Popular</p>}
                                <p className="mt-4 text-slate-700 text-sm leading-6 dark:text-white">{plan.description}</p>

                                <div className="mt-4 bg-slate-50 dark:bg-slate-600 p-6 rounded-lg -mx-6">
                                    <p className="text-sm font-semibold text-slate-500 dark:text-indigo-50 flex items-center">
                                        <span>{plan.currency}</span>
                                        <span className="ml-3 text-4xl text-slate-900 dark:text-white">${plan.price}</span>
                                        <span className="ml-1.5">{plan.frequency}</span>
                                    </p>
                                </div>

                                <ul className="mt-6 space-y-4 flex-1">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="text-sm text-slate-700 dark:text-white leading-6 flex">
                                            <BsCheck className="text-cyan-500 text-xl mr-4 my-auto shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#"
                                    className={`mt-8 block  px-6 py-4 text-sm font-semibold leading-4 text-center rounded-lg 
                                    ${plan.mostPopular ? "bg-indigo-500 hover:bg-indigo-600 shadow-md text-white" : "text-indigo-700 bg-indigo-50 hover:bg-indigo-100"}
                                `}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Package;
