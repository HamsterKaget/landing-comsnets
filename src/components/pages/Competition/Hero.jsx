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
            <a target={"_blank"} href="https://forms.gle/NRb9fGDLdwVKv75r6" className="py-2 px-6 bg-indigo-600 border-indigo-600 text-white rounded-md m-2">
              Register Now !
            </a>
            <div
              data-popover
              id="popover-default"
              role="tooltip"
              class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
            >
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
          <div className="flex justify-center item-center text-xl w-10/12 md:w-6/12 mx-auto">
            <a target={"_blank"} href="https://forms.gle/LLfieryMZRuSa8EG7" className="py-2 px-6 bg-indigo-600 border-indigo-600 text-white rounded-md m-2">
              Student Card
            </a>
            <a target={"_blank"} href="https://forms.gle/KrHGAiG37Brmach69" className="py-2 px-6 bg-indigo-600 border-indigo-600 text-white rounded-md m-2">
              Submission
            </a>
          </div>
        </div>
      </div>

      {/* <section id="countdown"></section> */}
    </>
  );
};

export default Hero;
