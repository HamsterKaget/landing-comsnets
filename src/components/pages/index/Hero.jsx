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
              <h1 className="text-4xl my-2 lg:text-5xl text-white font-bold uppercase" key={data.title}>
                {data.title}
              </h1>
              <h2 className="text-lg my-2 lg:text-3xl text-white opacity-80 font-bold uppercase" key={data.title}>
                Tech & Business Forum
              </h2>
              <h2 className="text-lg my-2 lg:text-lg text-white opacity-75 font-bold uppercase" key={data.title}>
                8 - 10 November 2023
                <br />
                Renaissance Resort Uluwatu, Bali
              </h2>
              {/* <hr /> */}
              <h1 className="text-xl my-2.5 lg:text-3xl text-slate-50 opacity-90 font-bold uppercase w-fit py-2.5 px-8 mx-auto" key={data.title}>
                Collaborate, Innovate, Transform:
                <br />
                Together towards Digital Excellence.
              </h1>
              {/* <p className="text-white my-3">{data.desc}</p> */}
            </>
          ))}

          <div className="flex justify-center item-center text-xl w-10/12 md:w-6/12 mx-auto">
            <a target={"_blank"} href="https://shop.gatheringinbali.com/events/detail/comsnets-bali-2023-fullboard-package" className="py-2 px-10 bg-indigo-600 border-indigo-600 text-white rounded-md m-2">
              Buy Ticket
            </a>
            <a target={"_blank"} href="/file/brochure.pdf" className="py-2 px-6 bg-transparent border-2 border-white-600 text-white rounded-md m-2">
              Get Brochure
            </a>
          </div>
        </div>
      </div>

      {/* <section id="countdown"></section> */}
    </>
  );
};

export default Hero;
