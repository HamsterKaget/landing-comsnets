import React from "react";
import "../../../index.css";
import { guide, guideImage } from "../../data/competition";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCards, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, EffectCards]);

const Guide = () => {
    return (
        <>
            <section id="guide" className=" bg-slate-50 dark:bg-slate-800">
                <div className="container flex flex-wrap h-auto  mx-auto">
                <div className="lg:w-4/12 w-full p-12 order-first lg:order-last mx-auto">
                    {/* <img src="/image/download.svg" alt="" className="max-h-96"/> */}
                    <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 1000 }} loop pagination={{ clickable: true }} effect="cards" className="mySwiper">
                        {guideImage.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image.src} alt={image.alt} className="rounded-xl" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="lg:w-6/12 py-5">
                        <div className="container">
                            {guide.map((data) => (
                                <>
                                    <div className="mt-8">
                                        <div className="md:w-8/12 mx-auto lg:ml-16 ml-4 text-left">
                                            {/* <h6 className="text-indigo-600 font-bold uppercase text-base">{data.section}</h6> */}
                                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">{data.title}</h1>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="md:w-10/12 mx-auto text-left text-slate-500 dark:text-slate-400">
                                            <p className="event-description my-8 mx-4 lg:mx-0 ">
                                                {/* make a message for cta to download guidlines and schedule bellow */}
                                                We want to ensure that you have all the necessary information to make the most of the upcoming Business Plan Competition. Below, you will find the guidelines and schedule for the event:
                                            </p>
                                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" 
                                                onClick={() => window.open('/file/Schedule_GIB.pdf', '_blank')}
                                            >
                                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    <svg width="16px" height="16px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="dark:text-white inline-flex mr-2 my-auto">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path fill="#000" className="dark:fill-white" fill-rule="evenodd" d="M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"></path>
                                                        </g>
                                                    </svg>

                                                    Schedule
                                                </span>
                                            </button>
                                            <br />
                                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" 
                                                onClick={() => window.open('/file/Guidelines_Proposal_Papers.pdf', '_blank')}                                        
                                            >
                                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    <svg width="16px" height="16px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="dark:text-white inline-flex mr-2 my-auto">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path fill="#000" className="dark:fill-white" fill-rule="evenodd" d="M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"></path>
                                                        </g>
                                                    </svg>
                                                    Guidelines Proposal
                                                </span>
                                            </button>
                                            <br />
                                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" 
                                                onClick={() => window.open('/file/Guidelines_Paper_Presentation.pdf', '_blank')}                                        
                                            >
                                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    <svg width="16px" height="16px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" class="dark:text-white inline-flex mr-2 my-auto">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path fill="#000" className="dark:fill-white" fill-rule="evenodd" d="M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"></path>
                                                        </g>
                                                    </svg>
                                                    Guidelines Presentation
                                                </span>
                                            </button>

                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Guide;
