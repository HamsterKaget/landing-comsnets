import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import TooglerMode from "./navbar/TooglerMode";
class Layout extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                <TooglerMode />
                <main>{this.props.children}</main>
                <Footer />
            </>
        );
    }
}

export default Layout;
