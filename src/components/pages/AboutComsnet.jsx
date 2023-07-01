import React from "react";
import Layout from "../layout/Layout";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { committee } from "../data/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper/core";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

class Home extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="min-h-screen">
                        <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
                            <h1 className="text-white font-bold text-4xl shadow-sm">About Comsnets</h1>
                        </div>
                        <div className="container max-w-[80vw] mb-8 rounded-lg bg-white dark:bg-slate-800 mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                            <div className="my-10 flex space-y-4 flex-col mx-4 text-center">
                                {/* <h1 className="text-3xl text-center dark:text-white uppercase">Coming Soon</h1> */}
                                {/* <Committee /> */}
                                <section id="about-comsnets">
                                    <div className="container h-auto mx-auto p-4">
                                        <div className="">
                                            <div className="md:w-8/12 mx-auto text-center">
                                                {/* <h6 className="text-indigo-600 font-bold text-base">comsnets</h6> */}
                                                <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white mb-6">What is Comsnets ?</h1>
                                                <p className="text-slate-500 mt-2">
                                                    COMSNETS is a premier international conference dedicated to advances in Networking and Communications Systems. The conference is a yearly event for a world-class gathering of researchers
                                                    from academia and industry, practitioners, and business leaders, providing a forum for discussing cutting edge research, and directions for new innovative business and technology.
                                                    <br />
                                                    <br />
                                                    The conference will include a highly selective technical program consisting of submitted papers, a small set of invited papers on important and timely topics from well-known leaders in the
                                                    field, and poster session of work in progress. Focused workshops and panel discussions will be held on emerging topics to allow for a lively exchange of ideas. International business and
                                                    government leaders will be invited to share their perspectives, and will complement the technical program.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="speaker">
                                    <div className="container h-auto mx-auto p-4">
                                        <div className="my-8">
                                            <div className="md:w-8/12 mx-auto text-center">
                                                {/* <h6 className="text-indigo-600 font-bold text-base">Committee</h6> */}
                                                <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Meet Comsnets Committee</h1>
                                                <p className="text-slate-500 mt-2 mb-6">
                                                    We're excited to welcome a diverse lineup of expert speakers to COMSNETS 2023. Our speakers come from a variety of backgrounds and industries, bringing unique perspectives and experiences
                                                    to the conference.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="my-8 w-[95%] mx-auto">
                                            <Swiper
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
                                            >
                                                {committee.map((speaker) => (
                                                    <SwiperSlide key={speaker.name}>
                                                        <div key={speaker.name} className="p-2.5 h-full">
                                                            <div className="card-content h-auto flex flex-col flex-grow items-center relative dark:bg-slate-700 dark:text-white rounded-3xl shadow-card2 transition-all duration-500 hover:-translate-y-3 group ">
                                                                <div className="image mt-8 w-32 h-32 p-1 rounded-full z-10">
                                                                    <img src={speaker.image} alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                                                                </div>

                                                                <div className="icons-wrapper absolute top-3 right-5 z-10 flex flex-col items-center">
                                                                    <a href={speaker.link.instagram}>
                                                                        <FaInstagram className="bg-indigo-600 border border-white rounded-full p-1 h-6 w-6 text-white mt-2 transition-all duration-300 hover:-translate-y-1 opacity-75 hover:opacity-100" />
                                                                    </a>
                                                                    <a href={speaker.link.facebook}>
                                                                        <FaFacebookF className="bg-indigo-600 border border-white rounded-full p-1 h-6 w-6 text-white mt-2 transition-all duration-300 hover:-translate-y-1 opacity-75 hover:opacity-100" />
                                                                    </a>
                                                                    <a href={speaker.link.linkedin}>
                                                                        <FaLinkedinIn className="bg-indigo-600 border border-white rounded-full p-1 h-6 w-6 text-white mt-2 transition-all duration-300 hover:-translate-y-1 opacity-75 hover:opacity-100" />
                                                                    </a>
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
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default Home;
