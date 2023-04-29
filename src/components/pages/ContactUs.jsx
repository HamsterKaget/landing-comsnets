import React from "react";
import Layout from "../layout/Layout";
import ContactButton from "./Contact/ContactButton";
import Contact from "./index/Contact";

class ContactUs extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="h-16 mt-22"></div>
                    {/* <ContactButton /> */}
                    <Contact />
                </Layout>
            </>
        );
    }
}
export default ContactUs;
