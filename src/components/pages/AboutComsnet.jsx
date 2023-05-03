import React from "react";
import Layout from "../layout/Layout";
import Committee from "./about/Comitte";

class Home extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <Committee />
                </Layout>
            </>
        );
    }
}
export default Home;
