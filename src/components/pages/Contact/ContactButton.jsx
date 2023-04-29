import React from "react";

const ContactButton = () => {
    return (
        <>
            <section id="contact-media" className="bg-white dark:bg-slate-900">
                <div className="container h-auto mx-auto  mt-4 p-4 pb-16">
                    <div className="mt-8 mb-16">
                        <div className="md:w-8/12 mx-auto text-center">
                            <h6 className="text-indigo-600 font-bold uppercase text-base">Contact</h6>
                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Contact Us</h1>
                            <p className="text-slate-500 mt-2 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae assumenda quaerat, eligendi sunt ratione ipsum.</p>
                        </div>
                    </div>
                    <div className="my-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-x-4 md:space-y-0">
                        <a href="mailto:info@example.com" className="bg-green-500 hover:bg-green-600 py-3 px-6 text-white rounded-md text-center block md:inline-block">
                            Contact us by email
                        </a>
                        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="bg-indigo-500 hover:bg-indigo-600 py-3 px-6 text-white rounded-md text-center block md:inline-block">
                            Contact us by WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactButton;
