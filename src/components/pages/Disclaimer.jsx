import React from "react";
import Layout from "../layout/Layout";

class Home extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="min-h-screen">
                        <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
                            <h1 className="text-white font-bold text-4xl shadow-sm">Disclaimer</h1>
                        </div>
                        <div className="container max-w-[90vw] mb-8 rounded-lg bg-white dark:bg-slate-800 dark:text-white mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                            <div className="my-10 flex space-y-4 flex-col lg:mx-12 mx-4 text-center">
                                <h1 className="font-bold text-3xl">Disclaimer for GatheringInBali</h1>

                                <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at contact@gatheringinbali.com</p>

                                <h2>Disclaimers for GatheringInBali</h2>

                                <p>
                                    All the information on this website - gatheringinbali.com - is published in good faith and for general information purpose only. GatheringInBali does not make any warranties about the completeness,
                                    reliability and accuracy of this information. Any action you take upon the information you find on this website (GatheringInBali), is strictly at your own risk. GatheringInBali will not be liable for any
                                    losses and/or damages in connection with the use of our website. Our Disclaimer was generated with the help of the <a href="https://www.termsfeed.com/disclaimer-generator/">Disclaimer Generator</a>.
                                </p>

                                <p>
                                    From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the
                                    content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur
                                    before we have the opportunity to remove a link which may have gone 'bad'.
                                </p>

                                <p>
                                    Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as
                                    well as their "Terms of Service" before engaging in any business or uploading any information.
                                </p>

                                <h2 className="font-bold mt-6 text-2xl">Consent</h2>

                                <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

                                <h2 className="font-bold mt-6 text-2xl">Update</h2>

                                <p>Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default Home;
