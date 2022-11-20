import React from "react";
import { blogs } from "./data/data";

const Blog = () => {
    return (
        <>
            <section id="sponsor" className="bg-white dark:bg-slate-900 ">
                <div className="container h-auto mx-auto p-4 pb-16">
                    <div className="my-8 mb-12">
                        <div className="md:w-8/12 mx-auto text-center">
                            <h6 className="text-indigo-600 font-bold text-base">Blog</h6>
                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Our Latest News</h1>
                            <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                        </div>
                    </div>

                    <div className="w-[95%] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-y-8 gap-x-4">
                        {blogs.map((blog) => (
                            <div className="bg-white dark:bg-slate-700 shadow-card2 rounded-xl text-left group border-indigo-600 dark:hover:border transition-all duration-30 hover:-translate-y-4">
                                <img src={blog.thumbnail} alt="" className="w-full h-auto rounded-xl rounded-bl-none rounded-br-3xl brightness-75 group-hover:brightness-100 transition-all duration-300 bg-cover" />
                                <div className="m-3">
                                    <h5 className="font-semibold text-lg my-2 dark:text-white">{blog.title}</h5>
                                    <p className="dark:text-slate-50 sm:max-h-150px max-h-[200px] overflow-auto">{blog.description}</p>
                                </div>
                                <a href={blog.link} className="block my-4 text-center w-[45%] group-hover:w-[75%] transition-all duration-300 bg-indigo-500 text-white px-4 py-2 rounded-r-xl">
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
