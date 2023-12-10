import React from "react";
import { MdDateRange, MdShareLocation, MdAssignment } from "react-icons/md";
import { eventDetails } from "../../data/data";
import { Link } from "react-router-dom";

const EventDetail = () => {
  return (
    <>
      <section id="eventDetail" className=" bg-slate-50 dark:bg-slate-800 h-auto w-full py-0.5">
        <div className="flex flex-wrap">
          {/* <div className="lg:w-6/12 w-full col-img"></div> */}
          <div className="lg:w-6/12 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3942.7577256385007!2d115.15890502929688!3d-8.808816909790039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2457800d3290d%3A0x16532d09f27a883d!2sFour%20Points%20by%20Sheraton%20Bali%2C%20Ungasan!5e0!3m2!1sid!2sid!4v1699255335310!5m2!1sid!2sid"
              // width="600"
              // height="450"
              // style="border:0;"
              // allowfullscreen=""
              // loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="lg:w-6/12 py-5">
            <div className="container">
              <div className="md:w-10/12 mx-auto text-left mt-4">
                {eventDetails.map((data) => (
                  <>
                    <div className="text-center">
                      {/* <h6 className="text-indigo-600 font-bold text-base">{data.section}</h6> */}
                      <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">{data.title}</h1>
                      <p className="text-slate-500 mt-2 mb-6">{data.desc}</p>
                    </div>

                    <div className="flex my-8">
                      <div className="mb-auto mx-4">
                        <MdDateRange className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                      </div>
                      <div className="text">
                        <p className="text-black dark:text-white font-bold text-xl">{data.title1}</p>
                        <p className="text-slate-500 text-lg">{data.desc1}</p>
                      </div>
                    </div>

                    <div className="flex my-8">
                      <div className="mb-auto mx-4">
                        <MdShareLocation className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                      </div>
                      <div className="text">
                        <p className="text-black dark:text-white font-bold text-xl">{data.title2}</p>
                        <p className="text-slate-500 text-lg">
                          <a href="https://www.marriott.com/en-us/hotels/dpsuw-renaissance-bali-uluwatu-resort-and-spa/overview/">{data.desc2}</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex my-8">
                      <div className="mb-auto mx-4">
                        <MdAssignment className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full" />
                      </div>
                      <div className="text">
                        <p className="text-black dark:text-white font-bold text-xl">{data.title3}</p>
                        <p className="text-slate-500">
                          Click here to
                          <Link to="/voa">
                            <a className="text-indigo-600"> learn more</a>
                          </Link>
                        </p>
                        {/* <p className="text-slate-500">{data.desc3}</p> */}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetail;
