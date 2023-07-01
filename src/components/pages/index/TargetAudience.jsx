import React from "react";
import { targetAudience } from "../../data/data";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, } from 'chart.js';
import { Bar, Pie } from "react-chartjs-2";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend, Title,);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

// const dataChart = {
//   // labels: ["Researcher", "Academics", "Industry Professionals", "Students", "Goverment Officials", "Other"],
//   labels: ["Industries / Corporate", "Government Stake Holders", "Associations", "Researchers", "Academics", "Public"],
//   datasets: [
//     {
//       label: "Audience",
//       backgroundColor: "#3B82F6",
//       borderColor: "#3B82F6",
//       borderWidth: 1,
//       hoverBackgroundColor: "#3B82F6",
//       hoverBorderColor: "#3B82F6",
//       data: [15, 25, 30, 15, 10, 5],
//     },
//   ],
// };

// const optionsChart = {
//   indexAxis: "y",
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   // maintainAspectRatio: true,
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "bottom",
//     },
//     title: {
//       display: true,
//       text: "Persentage of Our Target Audience ( % )",
//     },
//   },
// };

const dataChart = {
  labels: ["Industries / Corporate", "Government Stake Holders", "Associations", "Academics", "Others"],
  datasets: [
    {
      label: " % of Audience",
      backgroundColor: ["#3B82F6", "#9333EA", "#10B981", "#FBBF24", "#EF4444"],
      borderColor: "#ffffff",
      borderWidth: 1,
      hoverBackgroundColor: ["#3B82F6", "#9333EA", "#10B981", "#FBBF24", "#EF4444"],
      hoverBorderColor: "#ffffff",
      data: [40, 25, 15, 10, 10],
    },
  ],
};

const optionsChart = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "% Percentage of Our Target Audience",
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
                      {/* <h6 className="text-indigo-600 font-bold uppercase text-base">{data.section}</h6> */}
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
          <div className="lg:w-6/12 my-auto flex justify-center max-h-[400px]">
            {/* <Bar data={dataChart} options={optionsChart} /> */}
            <Pie data={dataChart} options={optionsChart} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TargetAudience;