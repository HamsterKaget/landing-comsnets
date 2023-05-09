import React from "react";
import { hero } from "../../data/data";

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
                            <h1 className="text-2xl my-2 lg:text-4xl text-white font-bold uppercase" key={data.title}>
                                {data.title}
                            </h1>
                            <h2 className="text-lg my-2 lg:text-lg text-white opacity-75 font-bold uppercase" key={data.title}>
                                8 - 10 November 2023
                            </h2>
                            <p className="text-white my-3">{data.desc}</p>
                        </>
                    ))}

                    <div className="flex flex-col md:flex-row justify-center item-center text-xl">
                        <a target={"_blank"} href="https://shop.gatheringinbali.com/events/detail/12" className="py-2 px-6 bg-indigo-600 border-indigo-600 text-white rounded-md m-2">
                            Buy Ticket
                        </a>
                        <a target={"_blank"} href="https://shop.gatheringinbali.com" className="py-2 px-6 bg-indigo-600 border-indigo-600 text-white rounded-md m-2">
                            Register Now
                        </a>
                    </div>
                </div>
            </div>

            {/* <section id="countdown"></section> */}
        </>
    );
};

export default Hero;
