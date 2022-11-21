import React from "react";

const Contact = () => {
    return (
        <>
            <section id="contact" className="bg-slate-50 dark:bg-slate-800 ">
                <div className="container h-auto mx-auto p-4 pb-16">
                    <div className="my-8">
                        <div className="md:w-8/12 mx-auto text-center">
                            <h6 className="text-indigo-600 font-bold text-base">Contact</h6>
                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Get in Touch With Us !</h1>
                            <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                        </div>
                    </div>
                    <form action="" method="get" className="w-[90%] mx-auto grid gap-3 justify-center lg:grid-cols-2 grid-cols-1 dark:text-white">
                        <div className="">
                            <input required type="text" name="name" id="name" placeholder="Your Full Name . . ." className="focus:outline outline-indigo-600 bg-slate-200 dark:bg-slate-600 w-full p-3 pl-6 rounded-lg" />
                        </div>
                        <div className="">
                            <input required type="email" name="email" id="email" placeholder="Your Email . . ." className="focus:outline outline-indigo-600 bg-slate-200 dark:bg-slate-600 w-full p-3 pl-6 rounded-lg" />
                        </div>
                        <div className="sm:col-span-2">
                            <input required type="text" name="subject" id="subject" placeholder="Your Subject . . ." className="focus:outline outline-indigo-600 bg-slate-200 dark:bg-slate-600 w-full p-3 pl-6 rounded-lg" />
                        </div>
                        <div className="sm:col-span-2">
                            <textarea required cols={30} rows={10} name="message" id="message" placeholder="Your Message . . ." className="focus:outline outline-indigo-600 bg-slate-200 dark:bg-slate-600 w-full p-3 pl-6 rounded-lg" />
                        </div>
                        <div className="sm:col-span-2">
                            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white w-full p-3 rounded-lg">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
