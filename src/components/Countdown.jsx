import React from "react";

const countdown = () => {
    const eventDate = new Date("November 25, 2022, 11:00:00").getTime();
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

    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;
    // console.log(timeDays, timeHours, timeMinutes, timeSeconds);
};

const Countdown = () => {
    return (
        <>
            <section id="countdown">
                <div className="h-auto bg-transparent w-10/12 md:w-8/12 -mt-12 mx-auto">
                    <div className="w-10/12 md:w-8/12 bg-white dark:bg-slate-800 border-b-8 border-indigo-500 rounded-lg z-10 absolute shadow-card2">
                        <div className="py-4 flex">
                            <div className="w-3/12 flex font-[Orbitron]">
                                <p className="text-2xl mx-auto text-black dark:text-white">
                                    <span id="days" className="block tracking-widest">
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
                                    <span id="hours" className="block tracking-widest">
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
                                    <span id="minutes" className="block tracking-widest">
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
                                    <span id="seconds" className="block tracking-widest">
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
