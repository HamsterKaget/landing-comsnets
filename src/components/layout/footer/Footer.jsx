import React, { useState } from "react";
import { footer, subFooter } from "../../data/data";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    let navigation = [
        { name: "Home", to: "/" },
        { name: "Event", to: "#" },
        { name: "Activity", to: "#" },
        { name: "Contact", to: "#" },
    ];
    const [open, setOpen] = useState(false);
    // const [nightMode, setNightMode] = useState(false);
    return (
        <>
            <footer className="bg-slate-50 shadow-card2 dark:bg-slate-900 pt-4">
                <div className="container mx-auto py-8">
                    <div className="w-[90%] mx-auto lg:text-left grid gap-12 gap-y-8 lg:grid-cols-4 sm:grid-cols-2 text-center">
                        <div className="mb-2 text-slate-600 dark:text-slate-400 text-sm sm:order-2 lg:order-first">
                            <h4 className="font-bold text-lg my-2 text-slate-900 dark:text-white">Gathering In Bali</h4>
                            Skyview Apartment 7/26 Jl. Lengkong Gudang Timur Raya Kel Lengkong
                            <br />
                            Kota Tangerang Selatan, Banten 15311
                            <br />
                            Indonesia <br /> <br />
                            <span className="dark:text-slate-200">
                                <strong>Phone:</strong> +62 812 675 60 600
                            </span>{" "}
                            <br />
                            <span className="dark:text-slate-200">
                                <strong>Email:</strong> contact@gatheringinbali.com
                            </span>{" "}
                            <br />
                        </div>
                        <div className="mb-2 text-slate-600 dark:text-slate-200">
                            {/* <h4 className="my-2 text-lg text-slate-800 dark:text-white font-semibold">Our Services</h4>
                            <ul>
                                {footer.map((items) =>
                                    items.ourServices.map((item) => (
                                        <li key={item.name} className="my-2">
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))
                                )}
                            </ul> */}
                        </div>
                        <div className="mb-2 text-slate-600 dark:text-slate-200">
                            <h4 className="my-2 text-lg text-center text-slate-800 dark:text-white font-semibold">Usefull Links</h4>
                            <ul>
                                {footer.map((items) =>
                                    items.usefullLink.map((item) => (
                                        <Link to={item.link}>
                                            <li key={item.name} className="my-2 text-center">
                                                <span>{item.name}</span>
                                            </li>
                                        </Link>
                                    ))
                                )}
                            </ul>
                        </div>
                        <div className="mb-2 text-slate-600 dark:text-slate-200 order-last">
                            <h4 className="my-2 text-lg text-slate-800 dark:text-white font-semibold">Join Our NewsLetter</h4>
                            <p className="text-sm dark:text-slate-400">Join our newsletter and never miss out on our info, event & more</p>
                            <form action="">
                                <div className="flex flex-col sm:flex-row">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="email@example.com"
                                        className="text-slate-9000 sm:rounded-r-none hover:outline outline-indigo-600 rounded-md dark:text-white dark:bg-slate-600 mt-2 shadow-md py-2 px-2"
                                    />
                                    <button type="submit" className="text-white mt-2 shadow-md py-2 bg-indigo-600 px-1.5 sm:rounded-l-none rounded-md">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 dark:text-white">
                    <div className="w-[80%] mx-auto container flex flex-col sm:flex-row justify-center text-center sm:text-left">
                        <div className="sm:w-1/2 w-full flex sm:justify-start justify-center items-center">
                            <p className="p-4 text-sm text-center">
                                <span className="font-bold">© 2022 - 2023 GatheringInBali</span>
                                <br />
                                All Right Reserved
                            </p>
                        </div>

                        {subFooter.map((item) => (
                            <div key={item.instagram} className="sm:w-1/2 w-full flex items-center sm:justify-end justify-center gap-4 p-4">
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.youtube}>
                                    <FaYoutube />
                                </a>
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.instagram}>
                                    <FaInstagram />
                                </a>
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.facebook}>
                                    <FaFacebookF />
                                </a>
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.tiktok}>
                                    <FaTiktok />
                                </a>
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.twitter}>
                                    <FaTwitter />
                                </a>
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.linkedin}>
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
