import React from "react";
import Layout from "../layout/Layout";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import styles from "../../card-hover.module.css"; // Import CSS module styles
import { partner } from "../data/partner_sponsor";

class Partnership extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="min-h-screen">
                        <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
                            <h1 className="text-white font-bold text-4xl shadow-sm">Our Partner</h1>
                        </div>
                        <div className="container max-w-[80vw] mb-8 rounded-lg bg-white dark:bg-slate-800 dark:text-slate-50 mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8 text-center">
                                {/* card */}
                                {partner.map((item) => (
                                    // <div className="relative w-full min-w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.name}>
                                    <div
                                        className="relative w-full min-w-[250px] max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 translate-y-2 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:border-indigo-600 dark:hover:border-indigo-600"
                                        key={item.name}
                                    >
                                        <div className="icons-wrapper absolute top-3 right-5 z-10 flex flex-col items-center space-y-1.5">
                                            {item.sosmed.instagram && (
                                                <a href={item.sosmed.instagram}>
                                                    <FaInstagram className="bg-indigo-600 border border-white  rounded-full p-1.5 h-7 w-7 text-white mt-2 transition-all duration-300 translate-y-1 hover:-translate-y-1 opacity-75 hover:opacity-100" />
                                                </a>
                                            )}
                                            {item.sosmed.whatsapp && (
                                                <a href={item.sosmed.whatsapp}>
                                                    <FaWhatsapp className="bg-indigo-600 border border-white  rounded-full p-1.5 h-7 w-7 text-white mt-2 transition-all duration-300 translate-y-1 hover:-translate-y-1 opacity-75 hover:opacity-100" />
                                                </a>
                                            )}
                                            {item.sosmed.facebook && (
                                                <a href={item.sosmed.facebook}>
                                                    <FaFacebookF className="bg-indigo-600 border border-white  rounded-full p-1.5 h-7 w-7 text-white mt-2 transition-all duration-300 translate-y-1 hover:-translate-y-1 opacity-75 hover:opacity-100" />
                                                </a>
                                            )}
                                            {item.sosmed.linkedin && (
                                                <a href={item.sosmed.linkedin}>
                                                    <FaLinkedinIn className="bg-indigo-600 border border-white  rounded-full p-1.5 h-7 w-7 text-white mt-2 transition-all duration-300 translate-y-1 hover:-translate-y-1 opacity-75 hover:opacity-100" />
                                                </a>
                                            )}
                                            {item.sosmed.youtube && (
                                                <a href={item.sosmed.youtube}>
                                                    <FaYoutube className="bg-indigo-600 border border-white  rounded-full p-1.5 h-7 w-7 text-white mt-2 transition-all duration-300 translate-y-1 hover:-translate-y-1 opacity-75 hover:opacity-100" />
                                                </a>
                                            )}
                                        </div>
                                        <div className="flex flex-col items-center pb-10 pt-5 px-1.5">
                                            {/* <img className="w-28 h-28 object-cover object-center mb-6 rounded-full shadow-lg" src={item.logo} alt={item.name} /> */}
                                            {/* <img className="w-28 h-28 max-w-full max-h-full object-cover object-center mb-6 rounded-full shadow-lg" src={item.logo} alt={item.name} /> */}
                                            <div className="w-28 h-28 overflow-hidden rounded-full shadow-lg">
                                                <img className="object-contain w-full h-full" src={item.logo} alt={item.name} />
                                            </div>
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.category}</span>
                                            <div className="flex flex-col mt-4 md:mt-6 space-y-4">
                                                <a
                                                    href={item.cta}
                                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                >
                                                    Learn More
                                                </a>
                                                {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default Partnership;
