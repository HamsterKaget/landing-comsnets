import React from "react";
import Layout from "../layout/Layout";
import ContactButton from "./Contact/ContactButton";
import Contact from "./index/Contact";

class ContactUs extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="min-h-screen">
                        <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
                            <h1 className="text-white font-bold text-4xl shadow-sm">Contact Us</h1>
                        </div>
                        <div className="container max-w-[90vw] mb-8 rounded-lg bg-white dark:bg-slate-800 dark:text-slate-50 mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                            <Contact />
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default ContactUs;
