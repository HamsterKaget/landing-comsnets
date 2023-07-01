import React from "react";
import Layout from "../layout/Layout";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ourTeams, secretary } from "../data/data";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper/core";
// SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

class Home extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <div className="min-h-screen">
            <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
              <h1 className="text-white font-bold text-4xl shadow-sm">About Us</h1>
            </div>
            <div className="container max-w-[80vw] mb-8 rounded-lg bg-white dark:bg-slate-800 mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
              <section id="teams">
                <div className="container h-auto mx-auto p-4">
                  <div className="my-8">
                    <div className="md:w-8/12 mx-auto text-center">
                      {/* <h6 className="text-indigo-600 font-bold text-base">Committee</h6> */}
                      <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Meet Our Teams !</h1>
                      <p className="text-slate-500 mt-2 mb-6">Meet our talented and diverse team, driven by innovation and excellence. Together, we deliver exceptional solutions and make a positive impact in the industry.</p>
                    </div>
                  </div>
                  <div className="my-8 w-[95%] mx-auto grid grid-cols-4">
                    {/* <Swiper
                                            autoplay={{ delay: 3000 }}
                                            navigation
                                            pagination={{ clickable: true }}
                                            grabCursor={true}
                                            breakpoints={{
                                                640: {
                                                    slidesPerView: 1,
                                                },
                                                768: {
                                                    slidesPerView: 2,
                                                },
                                                1024: {
                                                    slidesPerView: 3,
                                                },
                                                1280: {
                                                    slidesPerView: 4,
                                                },
                                            }}
                                        > */}
                    {ourTeams.map((speaker) => (
                      // <SwiperSlide key={speaker.name}>
                      <div key={speaker.name} className="p-2.5 h-full">
                        <div className="card-content h-full flex flex-col flex-grow items-center relative dark:bg-slate-700 dark:text-white rounded-3xl shadow-card2 transition-all duration-500 hover:-translate-y-3 group ">
                          <div className="image mt-8 w-32 h-32 p-1 rounded-full z-10">
                            <img src={speaker.image} alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                          </div>

                          <div className="name-proffesion text-center flex flex-col items-center mt-2 mx-1">
                            <span className="text-xl font-bold dark:text-white">{speaker.name}</span>
                            <span className="text-base opacity-70 uppercase italic font-bold text-slate-600 dark:text-slate-100">{speaker.job}</span>
                            <span className="mt-1 text-slate-600 dark:text-slate-100">{speaker.description}</span>
                            <span className="text-lg my-3 font-bold text-slate-600 dark:text-slate-100">{speaker.corp}</span>
                          </div>
                          <div className="w-[25%] border-b-8 border-indigo-600 translate-y-1/2 rounded-full group-hover:w-[60%] transition-all duration-500"></div>
                        </div>
                      </div>
                      // </SwiperSlide>
                    ))}
                    {/* </Swiper> */}
                  </div>
                </div>
              </section>
              <section id="secretary">
                <div className="container h-auto mx-auto p-4">
                  <div className="my-8">
                    <div className="md:w-8/12 mx-auto text-center">
                      {/* <h6 className="text-indigo-600 font-bold text-base">Committee</h6> */}
                      <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Our Secretary Teams !</h1>
                      {/* <p className="text-slate-500 mt-2 mb-6">
                                                Meet our talented and diverse team, driven by innovation and excellence. Together, we deliver exceptional solutions and make a positive impact in the industry.
                                            </p> */}
                    </div>
                  </div>
                  {/* <div className="my-8 w-[95%] mx-auto grid grid-cols-4"> */}
                  <div className="my-8 w-[95%] mx-auto grid grid-cols-4">
                    {secretary.map((speaker) => (
                      // <SwiperSlide key={speaker.name}>
                      <div key={speaker.name} className="p-2.5 h-full">
                        <div className="card-content h-full flex flex-col flex-grow items-center relative dark:bg-slate-700 dark:text-white rounded-3xl shadow-card2 transition-all duration-500 hover:-translate-y-3 group ">
                          <div className="image mt-8 w-32 h-32 p-1 rounded-full z-10">
                            <img src={speaker.image} alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                          </div>

                          <div className="name-proffesion text-center flex flex-col items-center mt-2 mx-1">
                            <span className="text-xl font-bold dark:text-white">{speaker.name}</span>
                            <span className="text-base opacity-70 uppercase italic font-bold text-slate-600 dark:text-slate-100">{speaker.job}</span>
                            <span className="mt-1 text-slate-600 dark:text-slate-100">{speaker.description}</span>
                            <span className="text-lg my-3 font-bold text-slate-600 dark:text-slate-100">{speaker.corp}</span>
                          </div>
                          <div className="w-[25%] border-b-8 border-indigo-600 translate-y-1/2 rounded-full group-hover:w-[60%] transition-all duration-500"></div>
                        </div>
                      </div>
                      // </SwiperSlide>
                    ))}
                    {/* </Swiper> */}
                  </div>
                </div>
              </section>
            </div>
            {/* <div className="container max-w-[80vw] mb-8 rounded-lg bg-white mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                            <div className="mx-12 text-center">
                                <h2 className="text-2xl font-bold my-8">Electronic Visa On Arrival</h2>
                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="text-left px-6">
                                        <p>An e-VOA is a single-entry visa valid for 30-day stay in Indonesia with the purpose of Tourism, Government visits, Business Meetings, Goods Purchasing, or Transit only.</p>
                                        <br />
                                        <p>E-VOA is an alternative to visas issued electronically via e-VISA Application, visa on arrival at the port of entry, and visa at Indonesian Embassy/Consulate.</p>
                                        <br />
                                        <p>Applicants obtain their e-VOA electronically after entering required information and making payments by a credit card (Mastercard, Visa, or JCB).</p>
                                        <br />
                                        <p>
                                            <a href="https://molina.imigrasi.go.id/">molina.imigrasi.go.id</a>
                                        </p>
                                        <br />
                                        <div className="my-2">
                                            <a href="https://imigrasisingaraja.kemenkumham.go.id/e-voa/" className="bg-indigo-600 py-2 px-4 shadow-lg text-white rounded-lg hover:-top-2 hover:bg-indigo-600">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>

                                    <div className="h-full mx-auto px-6 pb-8 ">
                                        <img
                                            src="/image/voa.png"
                                            alt=""
                                            className="h-full w-full rounded-lg shadow-lg
                                        "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </div>
        </Layout>
      </>
    );
  }
}
export default Home;
