import React from "react";
import { Link } from "react-router-dom";
import { sponsorLogo } from "../../data/data";

const SponsorLogo = () => {
    return (
        <section id="sponsorDetail" className="bg-slate-white dark:bg-slate-900 py-16">
            <div className="container h-auto mx-auto p-4 pb-16">
                <div className="my-8">
                    <div className="md:w-8/12 mx-auto text-center">
                        {/* <h6 className="text-indigo-600 font-bold text-base">Sponsor & Partnership</h6> */}
                        <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Our Sponsor</h1>
                        <p className="text-slate-500 mt-2 mb-16">We are grateful for the support of our sponsors, who help us to innovate and grow.</p>
                    </div>
                </div>
                <div className="my-8">
                    {/* <div className="md:w-8/12 mx-auto text-center">
                        <h2 className="uppercase font-bold text-xl md:text-2xl dark:text-slate-200 mt-12 mb-4 text-slate-600">OUR PARTNER</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {sponsorLogo.map((sub) =>
                            sub.partner.map((item) => {
                                return (
                                    <div className="h-16 m-2 flex flex-col justify-center">
                                        <Link to={item.href} target="_blank">
                                            <img src={item.src} alt={item.alt} className="max-h-14 md:max-h-16 h-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
                                        </Link>
                                    </div>
                                );
                            })
                        )}
                    </div> */}
                    <div className="md:w-8/12 mx-auto text-center">
                        <h2 className="uppercase font-bold text-xl md:text-2xl dark:text-slate-200 mt-12 mb-8 text-slate-600">GOLD SPONSOR</h2>
                    </div>
                    {sponsorLogo.length <= 1 ? (
                        <div className="w-10/12 bg-indigo-400 mx-auto rounded-xl opacity-95 py-2.5 px-2">
                            <p className="text-white text-xs sm:text-sm text-center">
                                Join us as a sponsor and be part of an exciting opportunity to reach out to a wide audience and support our mission. Let's work together to make a difference and create an impactful event. Contact us today to
                                learn more about sponsorship opportunities.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 mx-2 place-content-center">
                        {/* {console.log(sponsorLogo.length)} */}
                        {sponsorLogo.map((sub) =>
                            sub.gold.map((item) => {
                                return (
                                    <>
                                        <div className="h-20 m-2 flex flex-col justify-center">
                                            <Link to={item.href} target="_blank">
                                                <img src={item.src} alt={item.alt} className="max-h-16 md:max-h-20 h-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
                                            </Link>
                                        </div>
                                    </>
                                );
                            })
                        )}
                    </div>
                    <div className="md:w-8/12 mx-auto text-center">
                        <h2 className="uppercase font-bold text-xl md:text-2xl dark:text-slate-200 mt-12 mb-6 text-slate-600">SILVER SPONSOR</h2>
                    </div>
                    {sponsorLogo.length <= 1 ? (
                        <div className="w-10/12 bg-indigo-400 mx-auto rounded-xl opacity-95 py-2.5 px-2">
                            <p className="text-white text-xs sm:text-sm text-center">
                                Join us as a sponsor and be part of an exciting opportunity to reach out to a wide audience and support our mission. Let's work together to make a difference and create an impactful event. Contact us today to
                                learn more about sponsorship opportunities.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 w-11/12 mx-auto place-content-center">
                        {sponsorLogo.map((sub) =>
                            sub.silver.map((item) => {
                                return (
                                    <div className="h-16 m-2 flex flex-col justify-center">
                                        <Link to={item.href} target="_blank">
                                            <img src={item.src} alt={item.alt} className="max-h-12 md:max-h-14 h-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
                                        </Link>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <div className="md:w-8/12 mx-auto text-center">
                        <h2 className="uppercase font-bold text-xl md:text-2xl dark:text-slate-200 mt-12 mb-8 text-slate-600">BRONZE SPONSOR</h2>
                    </div>
                    {sponsorLogo.length <= 1 ? (
                        <div className="w-10/12 bg-indigo-400 mx-auto rounded-xl opacity-95 py-2.5 px-2">
                            <p className="text-white text-xs sm:text-sm text-center">
                                Join us as a sponsor and be part of an exciting opportunity to reach out to a wide audience and support our mission. Let's work together to make a difference and create an impactful event. Contact us today to
                                learn more about sponsorship opportunities.
                            </p>
                        </div>
                    ) : (
                        ""
                    )}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1 w-10/12 mx-auto place-content-center">
                        {sponsorLogo.map((sub) =>
                            sub.bronze.map((item) => {
                                return (
                                    <div className="h-12 m-2 flex flex-col justify-center">
                                        <Link to={item.href} target="_blank">
                                            <img src={item.src} alt={item.alt} className="max-h-10 md:max-h-12 h-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
                                        </Link>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorLogo;
