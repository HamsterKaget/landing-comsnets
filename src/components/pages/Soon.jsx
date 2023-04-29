import React from "react";
import Layout from "../layout/Layout";

class Home extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="h-screen flex justify-center items-center">
                        <h1 className="text-3xl text-center dark:text-white uppercase">Coming Soon</h1>
                    </div>
                </Layout>
            </>
        );
    }
}
export default Home;
