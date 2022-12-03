import React from "react";
import { hero } from "../../data/data";

const Hero = () => {
    return (
        <>
            <div id="hero" className="h-[90vh] flex items-center relative">
                <div className="lg:w-8/12 w-10/12 mx-auto text-center">
                    {hero.map((data) => (
                        <>
                            <h1 className="text-4xl my-2 lg:text-6xl text-white font-bold uppercase">{data.title}</h1>
                            <p className="text-white my-3">{data.desc}</p>
                        </>
                    ))}

                    <div className="flex flex-col md:flex-row justify-center item-center text-xl">
                        <a href="/" className="py-2 px-6 bg-indigo-600 text-white rounded-md m-2">
                            Explore
                        </a>
                        <a href="/" className="py-2 px-6 border border-white text-white rounded-md m-2 ">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            {/* <section id="countdown"></section> */}
        </>
    );
};

export default Hero;
