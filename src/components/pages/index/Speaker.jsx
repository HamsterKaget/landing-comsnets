import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { speakers } from "../../data/data";
// import Person1 from "../../public/image/person1.jpg";

const Speaker = () => {
    return (
        <>
            <section id="speaker" className="bg-slate-50 dark:bg-slate-800">
                <div className="container h-auto mx-auto p-4 pb-16">
                    <div className="my-8">
                        <div className="md:w-8/12 mx-auto text-center">
                            <h6 className="text-indigo-600 font-bold text-base">Speaker</h6>
                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">speaker 2023</h1>
                            <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                        </div>
                    </div>
                    <div className="my-8 w-[95%] mx-auto">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center">
                            {speakers.map((speaker) => (
                                <div className="p-4">
                                    <div className="card-content flex flex-col items-center relative bg-slate-100 dark:bg-slate-700 dark:text-white rounded-3xl shadow-card2 transition-all duration-500 hover:-translate-y-3 group ">
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
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Speaker;
