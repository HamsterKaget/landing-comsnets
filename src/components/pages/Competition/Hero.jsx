import React from "react";
import { hero } from "../../data/competition";

const Hero = () => {
    return (
        <>
            <div id="hero" className="h-[90vh] flex items-center relative">
                <div className="lg:w-8/12 w-10/12 mx-auto text-center">
                    {hero.map((data) => (
                        <>
                            <h2 className="text-lg my-2 lg:text-lg text-white opacity-75 font-bold uppercase" key={data.title}>
                                {data.featured}
                            </h2>
                            <h1 className="text-4xl my-2 lg:text-5xl text-white font-bold uppercase" key={data.title}>
                                {data.title}
                            </h1>
                            <h2 className="text-lg my-2 lg:text-lg text-white opacity-75 font-bold uppercase" key={data.title}>
                                2023
                            </h2>
                            {/* <hr /> */}
                            <h1 className="text-xl my-2.5 lg:text-3xl text-slate-50 opacity-90 font-bold uppercase w-fit py-2.5 px-8 mx-auto" key={data.title}>
                                Transforming Ideas into Digital Success:
                                <br />
                                Ignite, Innovate, and Dominate!
                            </h1>
                            {/* <p className="text-white my-3">{data.desc}</p> */}
                        </>
                    ))}

                    <div className="flex justify-center item-center text-xl w-10/12 md:w-6/12 mx-auto">
                        {/* <a target={"_blank"} href="#" className="py-2 px-6 bg-indigo-600 border-indigo-600 text-white rounded-md m-2">
                            Register Now !
                        </a> */}
                        <button data-popover-target="popover-default" type="button" class="py-2 px-6 bg-indigo-600 border-indigo-600 text-white rounded-md m-2 cursor-not-allowed">
                            <svg className="mr-1.5 inline-flex" width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z" stroke="#fff" stroke-width="2"></path> <path d="M15 9C16.8856 9 17.8284 9 18.4142 9.58579C19 10.1716 19 11.1144 19 13L19 15L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21L12 21L9 21C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 15L5 13C5 11.1144 5 10.1716 5.58579 9.58579C6.17157 9 7.11438 9 9 9L12 9L15 9Z" stroke="#fff" stroke-width="2" stroke-linejoin="round"></path> <path d="M9 9V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            Register Now !
                        </button>
                        <div data-popover id="popover-default" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                            <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                                <h3 class="font-semibold text-gray-900 dark:text-white">Register Locked</h3>
                            </div>
                            <div class="px-3 py-2">
                                <p>Register will be open on 31st July 2023</p>
                            </div>
                            <div data-popper-arrow></div>
                        </div>
                        <a target={"_blank"} href="https://wa.me/6281267560600" className="py-2 px-6 bg-indigo-600 border-indigo-600 text-white rounded-md m-2">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            {/* <section id="countdown"></section> */}
        </>
    );
};

export default Hero;
