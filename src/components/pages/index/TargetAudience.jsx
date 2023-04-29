import React from "react";
import { targetAudience } from "../../data/data";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dataChart = {
    labels: ["Researcher", "Academics", "Industry Professionals", "Students", "Goverment Officials", "Other"],
    datasets: [
        {
            label: "Audience",
            backgroundColor: "#3B82F6",
            borderColor: "#3B82F6",
            borderWidth: 1,
            hoverBackgroundColor: "#3B82F6",
            hoverBorderColor: "#3B82F6",
            data: [15, 25, 30, 15, 10, 5],
        },
    ],
};

const optionsChart = {
    indexAxis: "y",
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    // maintainAspectRatio: true,
    responsive: true,
    plugins: {
        legend: {
            position: "bottom",
        },
        title: {
            display: true,
            text: "Persentage of Our Target Audience ( % )",
        },
    },
};

const TargetAudience = () => {
    return (
        <>
            <section id="eventDetail" className=" bg-white dark:bg-slate-900 h-auto container mx-auto">
                <div className="flex flex-wrap">
                    <div className="lg:w-6/12 py-5">
                        <div className="container">
                            {targetAudience.map((data) => (
                                <>
                                    <div className="mt-8">
                                        <div className="mx-auto lg:ml-16 ml-4 text-left">
                                            <h6 className="text-indigo-600 font-bold uppercase text-base">{data.section}</h6>
                                            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">{data.title}</h1>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="md:w-10/12 mx-auto text-left text-slate-500 dark:text-slate-400">
                                            <p className="event-description mt-12 my-8 mx-4 lg:mx-0 ">
                                                {data.desc1}
                                                <br />
                                                <br />
                                                {data.desc2}
                                                <br />
                                                <br />
                                                {data.desc3}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-6/12 my-auto">
                        <Bar data={dataChart} options={optionsChart} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TargetAudience;
