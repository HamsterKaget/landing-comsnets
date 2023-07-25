import React from "react";
import { timer } from "../../data/competition";

const countdown = () => {
    const date = timer.map((time) => time.date);
    const eventDate = new Date(date).getTime();
    const now = new Date().getTime();

    const difference = eventDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    document.getElementById("days-competition").innerHTML = timeDays;
    document.getElementById("hours-competition").innerHTML = timeHours;
    document.getElementById("minutes-competition").innerHTML = timeMinutes;
    document.getElementById("seconds-competition").innerHTML = timeSeconds;
    // console.log(timeDays, timeHours, timeMinutes, timeSeconds);
};

const Countdown = () => {
    return (
        <>
            <section id="countdown-competition">
                <div className="h-auto bg-transparent text-center w-10/12 md:w-8/12 -mt-28 mx-auto">
                    <div className="w-10/12 md:w-8/12 bg-white dark:bg-slate-800 border-b-8 border-indigo-500 rounded-lg z-10 absolute shadow-card2">                                                        

                        <div className="w-11/12 mx-auto py-6 border-b border-gray-300">
                            <h3 class="text-lg uppercase font-bold text-center text-gray-500 dark:text-gray-400 sm:text-lg -mb-2">Registration Closed In</h3>

                            {/* <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                                <li class="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        Registration <span class="hidden sm:inline-flex sm:ml-2"></span>
                                    </span>
                                </li>
                                <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        <span class="mr-2">2</span>
                                        Submit <span class="hidden sm:inline-flex sm:ml-2">Idea</span>
                                    </span>
                                </li>
                                <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        <span class="mr-2">3</span>
                                        Presentation
                                    </span>
                                </li>
                                <li class="flex items-center">
                                    <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                        <span class="mr-2">4</span>
                                        Final <span class="hidden sm:inline-flex sm:ml-2">Submition</span>
                                    </span>
                                </li>
                            </ol> */}
                        </div>

                        <div className="py-6 mx-auto flex">
                            <div className="w-3/12 flex font-[Orbitron]">
                                <p className="text-2xl mx-auto text-black dark:text-white">
                                    <span id="days-competition" className="block tracking-widest">
                                        00
                                    </span>
                                    <span className="hidden md:block text-xl lg:text-2xl">Days</span>
                                </p>
                            </div>

                            <div className="my-auto">
                                <span className=" font-[Orbitron] text-2xl mx-auto text-black dark:text-white">:</span>
                            </div>

                            <div className="w-3/12 font-[Orbitron] ">
                                <p className="text-2xl mx-auto text-black dark:text-white">
                                    <span id="hours-competition" className="block tracking-widest">
                                        00
                                    </span>
                                    <span className="hidden md:block text-xl lg:text-2xl">Hours</span>
                                </p>
                            </div>

                            <div className="my-auto">
                                <span className=" font-[Orbitron] text-2xl mx-auto text-black dark:text-white">:</span>
                            </div>

                            <div className="w-3/12 font-[Orbitron] ">
                                <p className="text-2xl mx-auto text-black dark:text-white">
                                    <span id="minutes-competition" className="block tracking-widest">
                                        00
                                    </span>
                                    <span className="hidden md:block text-xl lg:text-2xl">Minutes</span>
                                </p>
                            </div>

                            <div className="my-auto">
                                <span className=" font-[Orbitron] text-2xl mx-auto text-black dark:text-white">:</span>
                            </div>

                            <div className="w-3/12 font-[Orbitron] ">
                                <p className="text-2xl mx-auto text-black dark:text-white">
                                    <span id="seconds-competition" className="block tracking-widest">
                                        00
                                    </span>
                                    <span className="hidden md:block text-xl lg:text-2xl">Seconds</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {setInterval(countdown, 1000)}
        </>
    );
};

export default Countdown;
