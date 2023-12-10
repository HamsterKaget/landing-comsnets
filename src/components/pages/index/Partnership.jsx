import React from "react";
import { Link } from "react-router-dom";
import { sponsorLogo } from "../../data/data";
import { supporter } from "../../data/partner_sponsor";

const Partnership = () => {
  return (
    <section id="sponsorDetail" className="bg-slate-white dark:bg-slate-900 py-16">
      <div className="container h-auto mx-auto p-4 pb-16">
        <div className="my-8">
          <div className="md:w-8/12 mx-auto text-center">
            {/* <h6 className="text-indigo-600 font-bold text-base">Sponsor & Partnership</h6> */}
            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Our Sponsor</h1>
            <p className="text-slate-500 mt-2 mb-16">We are proud to feature our esteemed sponsors, as their unwavering support has been instrumental in making this event a reality and help us to keep growing.</p>
          </div>
        </div>

        {/* {supporter.map((subItem) =>
            subItem.supporter.map((item) => (
              <div className="h-16 m-2 flex flex-col justify-center">
                <Link to={item.cta} target="_blank">
                  <img src={item.logo} alt={item.name} className="max-h-12 md:max-h-14 h-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
                </Link>
              </div>
            ))
        )} */}
        <div>
          <div className="md:w-8/12 mx-auto text-center">
            <h6 className="text-indigo-600 font-bold text-2xl">Supported By</h6>
          </div>
          <div className="flex flex-row flex-wrap space-x-4 justify-center items-center mx-auto px-2 md:px-4">
            <div className="h-auto flex flex-col justify-center">
              <Link to={"https://www.kominfo.go.id"} target="_blank">
                <img src={"partner/kominfo-horizontal.png"} alt={"kominfo support gatheringinbali"} className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </Link>
            </div>
            <div className="h-auto p-4 flex flex-col justify-center">
              <Link to={"https://www.kemenperin.go.id/"} target="_blank">
                <img src={"partner/logoOKES.png"} alt={"Kementrian Perindustrian support gatheringinbali"} className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </Link>
            </div>
            <div className="h-auto flex flex-col justify-center">
              <Link to={"https://kemenparekraf.go.id"} target="_blank">
                <img src={"partner/kemenparekraf.png"} alt={"Kemenparekraf support gatheringinbali"} className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </Link>
            </div>
            <div className="h-auto flex flex-col justify-center">
              <Link to={"https://www.indonesia.travel/id/id/home"} target="_blank">
                <img src={"partner/wondeful-indonesia.png"} alt={"Wonderfull Indonesia support gatheringinbali"} className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-2">
          <div className="md:w-8/12 mx-auto text-center">
            <h6 className="text-indigo-600 font-bold text-2xl">Strategic Partner</h6>
          </div>
          <div className="grid grid-cols-5 justify-center gap-1 mx-auto px-2 md:px-4 pt-4">
            <div className=""></div>
            <div className="p-4 flex flex-col items-center">
              <Link to={"https://kadin.id"} target="_blank">
                <img src={"/partner/kadin-logo.webp"} alt={"Kadin support gatheringinbali"} className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </Link>
            </div>
            <div className="p-4 flex flex-col items-center">
              <Link to={"https://mastel.id"} target="_blank">
                <img src="/partner/mastel.png" alt="Mastel support gatheringinbali" className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </Link>
            </div>
            <div className="p-4 flex flex-col items-center">
              <Link to={"https://www.comsnets.org"} target="_blank">
                <img src="/partner/comsnets.png" alt="Comsnets support gatheringinbali" className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </Link>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mx-auto px-2 md:px-4 pt-4">
            <div className="p-4 flex flex-col justify-start">
              <div className="text-center">
                <h6 className="text-indigo-600 font-bold text-2xl">Media Partner</h6>
              </div>
              <a href="https://www.idntimes.com" target="_blank" className="my-auto">
                <img src="/partner/logo-idn.png" alt="IDN Times support gatheringinbali" className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </a>
            </div>
            <div className="p-4 flex flex-col justify-start">
              <div className="text-center">
                <h6 className="text-indigo-600 font-bold text-2xl">OOH Partner</h6>
              </div>
              <a href="https://www.amg.co.id" target="_blank" className="my-auto">
                <img src="/partner/amg.png" alt="Alternative Media Group support gatheringinbali" className="h-full max-h-32 w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </a>
            </div>
            <div className="p-4 flex flex-col justify-start">
              <div className="text-center">
                <h6 className="text-indigo-600 font-bold text-2xl">Digital Marketing</h6>
              </div>
              <a href="https://www.krona.co.id" target="_blank" className="my-auto p-4">
                <img src="/partner/krona.webp" alt="Krona support gatheringinbali" className="h-full max-h-32 bg-black w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </a>
            </div>
            <div className="p-4 flex flex-col justify-start">
              <div className="text-center">
                <h6 className="text-indigo-600 font-bold text-2xl">Official Hotel</h6>
              </div>
              <a href="#" target="_blank" className="my-auto">
                <img
                  src="/partner/logo_hotel.webp"
                  alt="four point by sheraton official hotel for comsnet bali"
                  className="h-full max-h-32 bg-transparent w-auto p-4 mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out"
                />
              </a>
            </div>
            <div className="p-4 flex flex-col justify-start">
              <div className="text-center">
                <h6 className="text-indigo-600 font-bold text-2xl">Quad Helix - AI</h6>
              </div>
              <a href="https://korika.id" target="_blank" className="my-auto">
                <img src="/partner/korika.png" alt="Korika support gatheringinbali" className="h-full max-h-32 bg-transparent w-auto mx-auto hover:filter-none filter grayscale transition duration-150 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
