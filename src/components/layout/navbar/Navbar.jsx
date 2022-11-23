import React, { useState } from "react";
import Button from "./Button";
import { TbMenu2 } from "react-icons/tb";
import { RiCloseFill } from "react-icons/ri";
import { navigation } from "../../data/data";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const [nightMode, setNightMode] = useState(false);
    return (
        <>
            <nav className="shadow-lg w-full fixed top-0 left-0 z-50 opacity-90">
                <div className="lg:flex items-center justify-between bg-slate-50 dark:bg-slate-800 py-2 lg:px-10 px-7">
                    <div className="text-xl cursor-pointer flex items-center justify-between dark:text-white">
                        {/* <span></span> */}
                        Comsnets 2023
                        <div
                            onClick={() => {
                                setOpen(!open);
                            }}
                            className="text-3xl my-auto lg:hidden "
                        >
                            {open ? <RiCloseFill className="dark:text-white" /> : <TbMenu2 className="dark:text-white" />}
                        </div>
                    </div>
                    <ul
                        className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute text-center lg:static bg-slate-50 dark:bg-slate-800 dark:text-white lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-[top] duration-500 ease-in ${
                            open ? "top-[46px]" : "top-[-320px]"
                        }`}
                    >
                        {navigation.map(function (nav) {
                            return (
                                <Link key={nav.name} to={nav.to}>
                                    <li className="px-4 py-2 my-2 mx-2 first:mt-4 lg:first:mt-2 hover:bg-indigo-600 hover:text-white duration-300 rounded">{nav.name}</li>
                                </Link>
                            );
                        })}
                        <Link to="/sponsor">
                            <Button>Become Our Sponsor</Button>
                        </Link>
                    </ul>
                </div>
                {/* <div className="w-full md:w-4/12 float-right bg-slate-50 dark:bg-slate-800 border-b-8 border-indigo-500 rounded-b-lg">
                        <div className=" flex">
                            <div className="w-3/12 font-[Orbitron]">
                                <p className="text-xl mx-auto text-black dark:text-white">
                                    <span id="days">00</span>
                                </p>
                            </div>

                            <span className=" font-[Orbitron] text-xl text-black dark:text-white">:</span>

                            <div className="w-3/12 font-[Orbitron] ">
                                <p className="text-xl mx-auto text-black dark:text-white">
                                    <span id="hours">00</span>
                                </p>
                            </div>

                            <span className=" font-[Orbitron] text-xl mx-auto text-black dark:text-white">:</span>

                            <div className="w-3/12 font-[Orbitron] ">
                                <p className="text-xl mx-auto text-black dark:text-white">
                                    <span id="minutes">00</span>
                                </p>
                            </div>

                            <span className=" font-[Orbitron] text-xl mx-auto text-black dark:text-white">:</span>

                            <div className="w-3/12 font-[Orbitron] ">
                                <p className="text-xl mx-auto text-black dark:text-white">
                                    <span id="seconds">00</span>
                                </p>
                            </div>
                        </div>
                    </div> */}
            </nav>
        </>
    );
};

export default Navbar;
