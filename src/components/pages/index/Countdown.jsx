// import React from "react";
import React, { useEffect } from "react";
import { timer } from "../../data/data";

const Countdown = () => {
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

    const updateCountdownElement = (id, value) => {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = value;
      }
    };

    updateCountdownElement("days", timeDays);
    updateCountdownElement("hours", timeHours);
    updateCountdownElement("minutes", timeMinutes);
    updateCountdownElement("seconds", timeSeconds);
    // console.log(timeDays, timeHours, timeMinutes, timeSeconds);
  };

  // useEffect(() => {
  //   const interval = setInterval(countdown, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <section id="countdown">
        <div className="h-auto bg-transparent text-center w-10/12 md:w-8/12 -mt-12 mx-auto">
          <div className="w-10/12 md:w-8/12 bg-white dark:bg-slate-800 border-b-8 border-indigo-500 rounded-lg z-10 absolute shadow-card2">
            <div className="pt-4 flex justify-center items-center border-b border-black">
              <div className="flex items-center justify-center w-full mx-12 p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Attention !</span> The workshop was successfully held on November 8 - 10 at the Four Point Hotel, Thank you for your attendance, See you next year 👋
                </div>
              </div>
            </div>

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

      {/* {setInterval(countdown, 1000)} */}
    </>
  );
};

export default Countdown;
