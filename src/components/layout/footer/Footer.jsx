import React, { useState } from "react";
import { footer, subFooter } from "../../data/data";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
                    <div className="w-[90%] mx-auto text-left grid gap-12 lg:grid-cols-4 sm:grid-cols-2">
                        <div className="mb-5 text-slate-600 dark:text-slate-400 text-sm">
                            <h4 className="font-bold text-lg my-2 text-slate-900 dark:text-white">Comsnets</h4>
                            A123 Some Street <br />
                            Tanggerang, 16136 <br />
                            Indonesia <br /> <br />
                            <span className="dark:text-slate-200">
                                <strong>Phone:</strong> +62 838 2525 1212
                            </span>{" "}
                            <br />
                            <span className="dark:text-slate-200">
                                <strong>Email:</strong> info@advansmanajemen.com
                            </span>{" "}
                            <br />
                        </div>
                        <div className="mb-5 text-slate-600 dark:text-slate-200">
                            <h4 className="my-2 text-lg text-slate-800 dark:text-white font-semibold">Usefull Links</h4>
                            <ul>
                                {footer.map((items) =>
                                    items.usefullLink.map((item) => (
                                        <li key={item.link} className="my-2">
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                        <div className="mb-5 text-slate-600 dark:text-slate-200">
                            <h4 className="my-2 text-lg text-slate-800 dark:text-white font-semibold">Our Services</h4>
                            <ul>
                                {footer.map((items) =>
                                    items.ourServices.map((item) => (
                                        <li key={item.link} className="my-2">
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                        <div className="mb-5 text-slate-600 dark:text-slate-200">
                            <h4 className="my-2 text-lg text-slate-800 dark:text-white font-semibold">Join Our NewsLetter</h4>
                            <p className="text-sm dark:text-slate-400">Join our newsletter and never miss out on our info, event & more</p>
                            <form action="">
                                <div className="flex">
                                    <input type="email" name="email" id="email" placeholder="email@example.com" className="text-slate-9000 rounded-l-md dark:text-white dark:bg-slate-600 mt-2 shadow-md py-2 px-2" />
                                    <button type="submit" className="text-white mt-2 shadow-md py-2 bg-indigo-600 px-1.5 rounded-r-md">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 dark:text-white">
                    <div className="w-[80%] mx-auto container flex justify-center">
                        <div className="sm:w-1/2 w-full flex justify-start items-center">
                            <p className="p-4 text-sm">
                                <span className="font-bold">© 2022 - 2023 Comsnets</span> - All Right Reserved
                            </p>
                        </div>

                        {subFooter.map((item) => (
                            <div className="sm:w-1/2 w-full flex items-center justify-end gap-4 p-4">
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.linkedin}>
                                    <FaLinkedinIn />
                                </a>
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.twitter}>
                                    <FaTwitter />
                                </a>
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.instagram}>
                                    <FaInstagram />
                                </a>
                                <a className="border border-indigo-600 p-2 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 rounded-full text-indigo-600" href={item.facebook}>
                                    <FaFacebookF />
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
