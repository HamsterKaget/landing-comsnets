import React, { useState, useEffect } from "react";
import "../../../index.css";
import { material } from "../../data/data";

const Material = () => {
  const [activeButton, setActiveButton] = useState("Dashboard");

  useEffect(() => {
    // This code will run once when the component mounts
    setActiveButton("Day 1");
  }, []); // The empty dependency array ensures this effect runs only once

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getButtonClass = (buttonName) => {
    if (buttonName === activeButton) {
      return "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
    } else {
      return "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";
    }
  };
  const getTableBodyContent = () => {
    const dayOneData = material.find((dayData) => dayData.day === 1);

    const card1 = dayOneData
      ? dayOneData.data.map((item, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={item.link}>
              <img className="rounded-t-lg" src={item.thumbnail} alt="" />
            </a>
            <div className="p-5 flex flex-col justify-center text-center">
              <a href={item.link}>
                <h5 className="mb-2 uppercase text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <h5 className="text-lg font-bold tracking-tight text-gray-600 dark:text-white">{item.name}</h5>
                {/* <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-600 dark:text-white">{item.job}</h5> */}
              </a>
              <div className="flex justify-center mt-6">
                <a
                  href={item.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover.bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover.bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download Materials
                </a>
              </div>
            </div>
          </div>
        ))
      : null;

    const dayTwoData = material.find((dayData) => dayData.day === 2);

    const card2 = dayTwoData
      ? dayTwoData.data.map((item, index) => (
          <div key={index} className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={item.link}>
              <img className="rounded-t-lg" src={item.thumbnail} alt="" />
            </a>
            <div className="p-5 flex flex-col justify-center text-center">
              <a href={item.link}>
                <h5 className="mb-2 uppercase text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                <h5 className="text-lg font-bold tracking-tight text-gray-600 dark:text-white">{item.name}</h5>
                {/* <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-600 dark:text-white">{item.job}</h5> */}
              </a>
              <div className="flex justify-center mt-6">
                <a
                  href={item.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover.bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover.bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download Materials
                </a>
              </div>
            </div>
          </div>
        ))
      : null;

    switch (activeButton) {
      case "Day 1":
        return card1;
      case "Day 2":
        return card2;
      case "Day 3":
        // Add content for Day 3 here
        return null;
      default:
        return null;
    }
  };

  return (
    <>
      <section id="schedule" className=" bg-slate-100 dark:bg-slate-900">
        <div className="container flex flex-wrap h-auto  mx-auto"></div>
        <div className="lg:w-full py-5">
          <h2 className="uppercase font-bold text-center text-2xl md:text-4xl dark:text-white mt-4 mb-8">Materials</h2>
          <p className="mx-auto text-center -mt-6">Download our speaker presentation materials</p>
          <div className="w-full md:px-80 mx-auto text-center mb-6">
            <ul className="flex flex-wrap mx-auto justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
              <li className="mr-2">
                <button className={getButtonClass("Day 1")} onClick={() => handleButtonClick("Day 1")}>
                  Day 1
                </button>
              </li>
              <li className="mr-2">
                <button className={getButtonClass("Day 2")} onClick={() => handleButtonClick("Day 2")}>
                  Day 2
                </button>
              </li>
              <li className="mr-2">
                <button className={getButtonClass("Day 3")} onClick={() => handleButtonClick("Day 3")}>
                  Day 3
                </button>
              </li>
            </ul>
          </div>

          {/* <div id="data-container" class="sm:rounded-lg flex justify-center items-center space-y-3 space-x-4 container mx-auto my-4"> */}
          <div id="data-container" class="sm:rounded-lg flex flex-wrap justify-center items-stretch space-y-3 space-x-4 container mx-auto my-4">
            {getTableBodyContent("Day 1")}

            {/* <table id="scheduleTable" class="w-full text-sm text-center text-gray-500 dark:text-gray-400 border">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3 border">
                    Time Start
                  </th>
                  <th scope="col" class="px-4 py-3 border">
                    Time End
                  </th>
                  <th scope="col" class="px-4 py-3 border">
                    Duration
                  </th>
                  <th scope="col" class="px-4 py-3 border">
                    Activities
                  </th>
                  <th scope="col" class="px-4 py-3 border">
                    Topics
                  </th>
                </tr>
              </thead>
            </table> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Material;
