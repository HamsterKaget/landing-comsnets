import React from "react";
import { MdDateRange, MdShareLocation, MdAssignment } from "react-icons/md";
import { eventDetails } from "../../data/competition";
import { Link } from "react-router-dom";

const EventDetail = () => {
  return (
    <>
      <section id="eventDetail" className=" bg-white dark:bg-slate-900 h-auto w-full">
        <div className="flex flex-wrap">
          {/* <div className="lg:w-6/12 w-full col-img"></div> */}
          <div className="lg:w-6/12 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15770.853325660713!2d115.144855!3d-8.812979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244d47a29a8b7%3A0x8e70c2207d497c91!2sRenaissance%20Bali%20Uluwatu%20Resort%20%26%20Spa!5e0!3m2!1sen!2sid!4v1683925795062!5m2!1sen!2sid"
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
                          Witness the top finalists –
                          <Link to="/competition#guide">
                            <a className="text-indigo-600"> Click here </a>
                          </Link>
                          for groundbreaking innovation!
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
