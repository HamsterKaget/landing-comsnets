import React from "react";
import Layout from "../layout/Layout";

class Voa extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <div className="min-h-screen">
                        <div className="w-screen h-[75vh] bg-[#232659] text-center flex items-center justify-center">
                            <h1 className="text-white font-bold text-4xl shadow-sm">Visa on Arrival (VoA)</h1>
                        </div>
                        <div className="container max-w-[90vw] mb-8 rounded-lg bg-white mx-auto min-h-[25vh] h-full -mt-32 shadow-lg flex flex-col items-center">
                            <div className="mx-4 lg:mx-12 text-center">
                                <div className="grid grid-cols-1 lg:grid-cols-2 my-8">
                                    <div className="text-left px-6">
                                        <div className="">
                                            <h2 className="text-2xl font-bold my-4">Electronic Visa On Arrival</h2>
                                            <p>An e-VOA is a single-entry visa valid for 30-day stay in Indonesia with the purpose of Tourism, Government visits, Business Meetings, Goods Purchasing, or Transit only.</p>
                                            <br />
                                            <p>E-VOA is an alternative to visas issued electronically via e-VISA Application, visa on arrival at the port of entry, and visa at Indonesian Embassy/Consulate.</p>
                                            <br />
                                            <p>Applicants obtain their e-VOA electronically after entering required information and making payments by a credit card (Mastercard, Visa, or JCB).</p>
                                            <br />
                                            <p>
                                                <a href="https://molina.imigrasi.go.id/">molina.imigrasi.go.id</a>
                                            </p>
                                            <br />
                                            <div className="my-2">
                                                <a href="https://imigrasisingaraja.kemenkumham.go.id/e-voa/" className="bg-indigo-600 py-2 px-4 shadow-lg text-white rounded-lg hover:-top-2 hover:bg-indigo-600">
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                        <div className="pt-2.5">
                                            <h2 className="text-2xl font-bold my-4">Visa On Arrival (Non Electronic)</h2>
                                            <p>
                                                Directorate General of Immigration issued Circular Letter No. IMI-0603.GR.01.01 of 2022 on 27 April 2022 that adds 12 countries as subjects of Visa on Arrival (VoA). The 12 countries include
                                                Bahrain, Belarus, Bosnia, Kuwait, Egypt, Morocco, Oman, Peru, Russia, Serbia, Ukraine, and Jordan. In total, there are 72 countries citizens of which are eligible for VOA. Despite that this is
                                                great news for foreign tourists, many still wonder, what should be done to get Visa on Arrival in Indonesia? <br />
                                            </p>
                                            <br />
                                            <p>
                                                “To obtain VoA, foreigners must show a nationality passport that is valid for at least 6 (six) months, return tickets or a ticket to continue traveling to another country, Covid-19 vaccination
                                                certificate (full dose) and proof of payment for VoA”
                                            </p>
                                            <br />
                                            <p>
                                                Visa on Arrival costs Rp 500.000, according to Government Regulation No. 28 of 2019. The same cost applies for VoA extension. Foreigners can apply for VoA on Bank Rakyat Indonesia (BRI)
                                                counter located before immigration check points in the arrival hall. They can pay with US Dollars and Rupiah, or request currency change first if unavailable. Visa on Arrival subjects can
                                                extend the VoA for only once, it is valid for the next 30 days. Extension is carried out at any immigration office that is closest to where the foreigner lives.
                                            </p>
                                            <br />
                                            <p>Visa on Arrival cannot be converted to another stay permit type. Holders are also not eligible to apply for an extension of their stay permit with an onshore visa.</p>
                                            <br />
                                            <p>
                                                “Foreigners who misuse their stay permit will be subject to immigration sanctions according to the applicable laws and regulations. Likewise, suppose they are proven to have violated health
                                                protocols and disrupted public order,”
                                            </p>
                                            <br />
                                            <p>Immigration Border Control (TPI) Designated as the entry point to VoA and Visa Exemption arrangements Subject Countries</p>
                                            <br />
                                            <ul className="list-none">
                                                <h3 className="font-bold text-lg my-2.5">Airports</h3>

                                                <li> Nadim, Riau Islands</li>
                                                <li>Soekarno Hatta, Jakarta,</li>
                                                <li>Ngurah Rai, Bali,</li>
                                                <li>Kualanamu, North Sumatera,</li>
                                                <li>Juanda, East Java</li>
                                                <li>Hasanuddin, South Sulawesi</li>
                                                <li>Sam Ratulangi, North Sulawesi</li>
                                                <li>Yogyakarta, Yogyakarta</li>
                                                <li>Zainuddin Abdul Majid, West Nusa Tenggara</li>
                                            </ul>

                                            <ul className="list-none">
                                                <h3 className="font-bold text-lg my-2.5">Seaports</h3>

                                                <li>Benoa, Bali</li>
                                                <li>Dumai, Riau</li>
                                                <li>Nongsa Terminal Bahari, Riau Islands,</li>
                                                <li>Batam Centre, Riau Islands,</li>
                                                <li>Sekupang, Riau Islands,</li>
                                                <li>Citra Tri Tunas, Riau Islands,</li>
                                                <li>Marina Teluk Senimba, Riau Islands,</li>
                                                <li>Bandar Bentan Telani Lagoi, Riau Islands,</li>
                                                <li>Bandar Seri Udana Lobam, Riau Islands</li>
                                                <li>Sri Bintan Pura, Riau Islands.</li>
                                                <li>Tanjung Balai Karimun, Riau Islands</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="h-full mx-auto px-6 py-8 ">
                                        <img
                                            src="/image/voa.png"
                                            alt=""
                                            className="h-auto w-full rounded-lg shadow-lg
                                        "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}
export default Voa;
