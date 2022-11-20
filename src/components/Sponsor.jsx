import React from "react";
import { sponsors } from "./data/data";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Sponsor = () => {
    return (
        <>
            <section id="sponsor" className="bg-slate-50 dark:bg-slate-800 ">
                <div className="container h-auto mx-auto p-4">
                    <div className="my-8">
                        <div className="md:w-8/12 mx-auto text-center">
                            <h6 className="text-indigo-600 font-bold text-base">Sponsor</h6>
                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Our Sponsor</h1>
                            <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                        </div>
                        <div className="w-11/12 bg-indigo-400 mx-auto p-4 rounded-xl opacity-95">
                            <p className="text-white text-sm sm:text-base">
                                become our sponsor .... Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, praesentium. Dignissimos, enim laborum dolorem suscipit minima sapiente delectus aspernatur rem iure quasi ex molestiae
                                dolores quidem quis quia vel! Rem. for detailed information about sponsoring this event you can contact us or{" "}
                                <a href="#" className="underline font-semibold">
                                    click here.
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="my-12">
                        <div className="md:w-8/12 mx-auto text-center my-8">
                            <h6 className="text-indigo-600 font-bold text-2xl">Gold Sponsor</h6>
                        </div>
                        <div className="mt-20 w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-12 gap-16">
                            {sponsors.map((sponsor) =>
                                sponsor.gold.map((item) => (
                                    <div className="relative bg-white dark:bg-slate-700 shadow-card flex flex-col justify-center items-center rounded-xl p-4 h-auto">
                                        <div className=" absolute top-0 -translate-y-1/2 bg-white rounded-full dark:bg-slate-600 border border-slate-200 dark:border-indigo-600">
                                            <img src={item.logo} alt={item.name} className="w-24 h-24" />
                                        </div>

                                        <div className="mb-4 mt-12">
                                            <p className="text-xl font-bold text-slate-800 dark:text-white tracking-wide my-2">{item.name}</p>
                                            <p className="my-2 text-sm text-slate-700 dark:text-slate-200">{item.description}</p>
                                            <p className="my-2 text-sm text-slate-700 dark:text-slate-200">{item.description2}</p>
                                        </div>
                                        <a href="#" className="text-base mb-6 mt-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-lg py-2 rounded-lg w-[75%]">
                                            See More
                                        </a>

                                        <div className="w-full flex justify-evenly text-2xl text-indigo-600 dark:text-white  pt-4 border-t-2">
                                            <a
                                                href={item.link.web}
                                                className="bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full border border-indigo-600 p-2  transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <TbWorld />
                                            </a>
                                            <a
                                                href={item.link.instagram}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaInstagram />
                                            </a>
                                            <a
                                                href={item.link.twitter}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaTwitter />
                                            </a>
                                            <a
                                                href={item.link.facebook}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:bg-indigo-600 rounded-full hover:text-white border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaFacebookF />
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="border-b-2 opacity-80 w-[95%] mx-auto mt-12"></div>
                    </div>

                    <div className="my-12">
                        <div className="md:w-8/12 mx-auto text-center my-8">
                            <h6 className="text-indigo-600 font-bold text-2xl">Silver Sponsor</h6>
                        </div>
                        <div className="mt-20 w-[95%] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-20 gap-12">
                            {sponsors.map((sponsor) =>
                                sponsor.silver.map((item) => (
                                    <div className="relative bg-white dark:bg-slate-700 shadow-card flex flex-col justify-center items-center rounded-xl p-4 h-auto">
                                        <div className=" absolute top-0 -translate-y-1/2 bg-white rounded-full dark:bg-slate-600 border border-slate-200 dark:border-indigo-600">
                                            <img src={item.logo} alt={item.name} className="w-24 h-24" />
                                        </div>

                                        <div className="mb-4 mt-12">
                                            <p className="text-xl font-bold text-slate-800 dark:text-white tracking-wide my-2">{item.name}</p>
                                            {/* <p className="my-2 text-sm text-slate-700 dark:text-slate-200">{item.description}</p>
                                            <p className="my-2 text-sm text-slate-700 dark:text-slate-200">{item.description2}</p> */}
                                        </div>

                                        <div className="w-full flex justify-evenly text-2xl text-indigo-600 dark:text-white  pt-4 border-t-2">
                                            <a
                                                href={item.link.web}
                                                className="bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full border border-indigo-600 p-2  transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <TbWorld />
                                            </a>
                                            <a
                                                href={item.link.instagram}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaInstagram />
                                            </a>
                                            <a
                                                href={item.link.twitter}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaTwitter />
                                            </a>
                                            <a
                                                href={item.link.facebook}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:bg-indigo-600 rounded-full hover:text-white border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaFacebookF />
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="border-b-2 opacity-80 w-[75%] mx-auto mt-12"></div>
                    </div>

                    <div className="my-12">
                        <div className="md:w-8/12 mx-auto text-center my-8">
                            <h6 className="text-indigo-600 font-bold text-2xl">Bronze Sponsor</h6>
                        </div>
                        <div className="mt-20 w-[95%] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 gap-y-16 justify-center items-center">
                            {sponsors.map((sponsor) =>
                                sponsor.bronze.map((item) => (
                                    <div className="relative bg-white dark:bg-slate-700 shadow-card flex flex-col justify-center items-center rounded-xl p-4 h-auto">
                                        <div className=" absolute top-0 -translate-y-1/2 bg-white rounded-full dark:bg-slate-600 border border-slate-200 dark:border-indigo-600">
                                            <img src={item.logo} alt={item.name} className="w-20 h-20" />
                                        </div>

                                        <div className="mb-2 mt-8">
                                            <p className="text-lg font-bold text-slate-800 dark:text-white tracking-wide my-2">{item.name}</p>
                                            {/* <p className="my-2 text-sm text-slate-700 dark:text-slate-200">{item.description}</p>
                                            <p className="my-2 text-sm text-slate-700 dark:text-slate-200">{item.description2}</p> */}
                                        </div>

                                        <div className="w-full flex justify-evenly text-xl text-indigo-600 dark:text-white  pt-4 border-t-2">
                                            <a
                                                href={item.link.web}
                                                className="bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full border border-indigo-600 p-2  transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <TbWorld />
                                            </a>
                                            <a
                                                href={item.link.instagram}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:text-white hover:bg-indigo-600 rounded-full border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaInstagram />
                                            </a>
                                            <a
                                                href={item.link.twitter}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:bg-indigo-600 hover:text-white rounded-full border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaTwitter />
                                            </a>
                                            <a
                                                href={item.link.facebook}
                                                className=" bg-white dark:bg-slate-700 dark:border-white dark:hover:border-indigo-600 dark:hover:bg-indigo-600 hover:bg-indigo-600 rounded-full hover:text-white border border-indigo-600 p-2 transition-all duration-500 hover:-translate-y-1"
                                            >
                                                <FaFacebookF />
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="border-b-2 opacity-80 w-[55%] mx-auto mt-12"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sponsor;
