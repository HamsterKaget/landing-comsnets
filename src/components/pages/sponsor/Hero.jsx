import React from "react";

const Hero = () => {
    return (
        <>
            {/*Hero Section on Sponsor page */}
            <section id="heroSponsor" className="relative bg-white dark:bg-slate-900 h-[80vh] lg:h-screen">
                <div className="w-[90%] h-full mx-auto container flex flex-col-reverse lg:flex-row items-center gap-6 mt-32 lg:mt-0">
                    {/* Hero Content */}
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="font-bold text-indigo-600 text-3xl md:text-4xl lg:text-5xl text-center lg:text-left mb-6">Grow Your Bussines With Us !</h2>
                        <p className="text-slate-600 dark:text-slate-50 text-lg text-center lg:text-left mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perspiciatis sunt, maiores quis, cum temporibus recusandae, iusto nemo cupiditate vero quas ad accusamus laboriosam quo in placeat reprehenderit
                            ex assumenda. Lorem ipsum dolor sit amet.
                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <button type="button" className="py-3 px-6 bg-indigo-600 text-white rounded-lg">
                                Learn More
                            </button>
                            <button type="button" className="py-3 px-6 bg-slate-200 text-indigo-600 shadow-lg  rounded-lg">
                                Get Started
                            </button>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="flex flex-1 justify-center">
                        <img className="w-5/6 h-5/6" src="./image/sponsor.png" alt="sponsor vector" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
