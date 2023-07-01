import React from "react";
import Layout from "../layout/Layout";

class Home extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="min-h-screen">
                        <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
                            <h1 className="text-white font-bold text-4xl shadow-sm">Privacy Policy</h1>
                        </div>
                        <div className="container max-w-[90vw] mb-8 rounded-lg bg-white dark:bg-slate-800 dark:text-slate-50 mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                            <div className="my-10 flex space-y-4 flex-col lg:mx-12 mx-4 text-center">
                                {/* <h1 className="text-3xl text-center dark:text-white uppercase">Coming Soon</h1> */}
                                <h1 className="font-bold  mt-4  text-3xl">Privacy Policy for GatheringInBali</h1>
                                <p>
                                    At GatheringInBali, accessible from https://gatheringinbali.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected
                                    and recorded by GatheringInBali and how we use it.
                                </p>

                                <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                                <h2 className="font-bold  mt-4  text-2xl">Log Files</h2>

                                <p>
                                    GatheringInBali follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information
                                    collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not
                                    linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering
                                    demographic information. Our Privacy Policy was created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/">Privacy Policy Generator</a>.
                                </p>

                                <h2 className="font-bold  mt-4  text-2xl">Cookies and Web Beacons</h2>

                                <p>
                                    Like any other website, GatheringInBali uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The
                                    information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                                </p>

                                <h2 className="font-bold  mt-4  text-2xl">Privacy Policies</h2>

                                <p>You may consult this list to find the Privacy Policy for each of the advertising partners of GatheringInBali.</p>

                                <p>
                                    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on GatheringInBali, which are sent
                                    directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the
                                    advertising content that you see on websites that you visit.
                                </p>

                                <p>Note that GatheringInBali has no access to or control over these cookies that are used by third-party advertisers.</p>

                                <h2 className="font-bold  mt-4  text-2xl">Third Party Privacy Policies</h2>

                                <p>
                                    GatheringInBali's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed
                                    information. It may include their practices and instructions about how to opt-out of certain options.{" "}
                                </p>

                                <p>
                                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective
                                    websites. What Are Cookies?
                                </p>

                                <h2 className="font-bold  mt-4  text-2xl">Children's Information</h2>

                                <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                                <p>
                                    GatheringInBali does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we
                                    strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                                </p>

                                <h2 className="font-bold  mt-4  text-2xl">Online Privacy Policy Only</h2>

                                <p>
                                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in GatheringInBali. This policy is not
                                    applicable to any information collected offline or via channels other than this website.
                                </p>

                                <h2 className="font-bold  mt-4  text-2xl">Consent</h2>

                                <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default Home;
