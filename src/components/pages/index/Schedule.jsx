import React, { useState, useEffect } from "react";
import "../../../index.css";

const Schedule = () => {
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
    switch (activeButton) {
      case "Day 1":
        return (
          <tbody>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">08:00</td>
              <td class="px-6 py-2 border">09:00</td>
              <td class="px-6 py-2 border">1:00</td>
              <th scope="row" colSpan={2} class="border col-span-2 px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Open Registration
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:00</td>
              <td class="px-6 py-2 border">09:10</td>
              <td class="px-6 py-2 border">0:10</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Officials Protocols
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Introduction
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:10</td>
              <td class="px-6 py-2 border">09:20</td>
              <td class="px-6 py-2 border">0:10</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Opening Ceremony
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Cultural Performance
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:20</td>
              <td class="px-6 py-2 border">09:50</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Keynote Speech
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Security in Digital Economy
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/menkominfo.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Budi Arie Setiadi</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Ministry of Communication</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">and Information (MENKOMINFO)</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:50</td>
              <td class="px-6 py-2 border">10:45</td>
              <td class="px-6 py-2 border">0:55</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 1
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Path to Smart World
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/Brett-King-Wordpress.webp" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Brett King</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Futurist & Author</h3>
                  </div>
                </div>
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">10:45</td>
              <td class="px-6 py-2 border">11:40</td>
              <td class="px-6 py-2 border">0:55</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 2
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Future of Money in Indonesia
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/bi.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Bank Indonesia</h3>
                    {/* <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Indian Institute of Technology (IIT)</h3> */}
                  </div>
                </div>
              </th>
            </tr>

            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                11:40
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                12:10
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                0:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Coffee Break
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>

            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">12:10</td>
              <td class="px-6 py-2 border">12:40</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 3
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Cyber Security - Innovations and Challenges
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/tulika-pandey.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Dr. tulika Pandey</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Senior Director of MEITY</h3>
                  </div>
                </div>
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">12:40</td>
              <td class="px-6 py-2 border">13:00</td>
              <td class="px-6 py-2 border">0:20</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 4
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Technological innovations in the financial system in Indonesia
              </th>
            </tr>

            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                13:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                13:30
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                0:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Lunch
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">13:30</td>
              <td class="px-6 py-2 border">14:00</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 5
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Bank 4.0 - Indonesia Readiness
                {/* <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/indonesian-digital-bank.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl"></h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Indonesian Digital Bank</h3>
                  </div>
                </div> */}
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">14:00</td>
              <td class="px-6 py-2 border">14:30</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 6
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Cyber Threat Intelligences
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/about-us/huzur-saran.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Prof. Dr. Huzur Saran</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Indian Institute of Technology (IIT)</h3>
                  </div>
                </div>
              </th>
            </tr>

            <tr class="bg-gray-100 dark:bg-slate-800 border-b  dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                14:30
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                15:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                0:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Coffee Break
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">15:00</td>
              <td class="px-6 py-2 border">15:30</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 7
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Cyber Attacks - How to Mitigate Risks
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">15:30</td>
              <td class="px-6 py-2 border">16:00</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 8
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Blockchain , CBDC and Data Privacy
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/g_venkatesh.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Dr. G. Venkatesh</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">SASKEN Technologies, Ltd, Bangalore</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">16:00</td>
              <td class="px-6 py-2 border">17:00</td>
              <td class="px-6 py-2 border">1:00</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Panel Discussion
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Navigating The Future of Cyber : Business Strategy, Cybercrime Awareness and Digital Transformation Are Keys
              </th>
            </tr>

            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                17:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                18:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                1:00
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                End Of Sessions
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>

            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">18:00</td>
              <td class="px-6 py-2 border">21:00</td>
              <td class="px-6 py-2 border">3:00</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Gala Dinner
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Round table - Seating arranged
              </th>
            </tr>
          </tbody>
        );
      case "Day 2":
        return (
          <tbody>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">08:30</td>
              <td class="px-6 py-2 border">09:30</td>
              <td class="px-6 py-2 border">1:00</td>
              <th scope="row" colSpan={2} class="border col-span-2 px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Open Registration
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:30</td>
              <td class="px-6 py-2 border">09:40</td>
              <td class="px-6 py-2 border">0:10</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Official Protocols
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Introduction
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:40</td>
              <td class="px-6 py-2 border">10:10</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Keynote Speech
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Using of IT technology for sustainable industries
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/dr-kishore-babu.png" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Dr. Kishore Babu</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Area Rep for SEA</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">10:10</td>
              <td class="px-6 py-2 border">10:40</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 1
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Digital Transformation to Build Green Economy in Indonesia
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/Ilham-Habibie.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Dr. H. Ilham Akbar Habibie,</h3>
                    <h3 className="font-bold text-xl">Dipl.Ing, MBA</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Head of Reaserch & Technology KADIN</h3>
                  </div>
                </div>
              </th>
            </tr>

            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                10:10
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                10:40
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                0:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Coffee Break
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:10</td>
              <td class="px-6 py-2 border">11:40</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 2
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Digital Assets Promotes Green Economy
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:40</td>
              <td class="px-6 py-2 border">12:10</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 3
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                IT Energy Consumption Solutions
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/dr-alfred-boediman.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Dr. Alfred Boediman PhD</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Partner of Jawara Ventures</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                12:10
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                13:30
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                1:20
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                LUNCH
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">13:30</td>
              <td class="px-6 py-2 border">14:00</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 4
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Manufacturing Plant Energy Systems - Sustainable Technology
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/about-us/jefrey.jpeg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Jeffrey Tew</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">TATA Consultancy Services (TCS)</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">14:00</td>
              <td class="px-6 py-2 border">14:30</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 5
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Emission Reduction in Small-Medium Enterprise
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/natalia-rialucky.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Natalia Rialucky</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">CEO Fairatmos</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b  dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                14:30
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                15:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                0:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Coffee Break
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">15:00</td>
              <td class="px-6 py-2 border">15:30</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 6
              </th>
              {/* <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                IoT and Analytics in Renewable Energy
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/rajeev_shorey.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Rajeev Shorey</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Indian Institute of Technology</h3>
                  </div>
                </div>
              </th> */}
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Green Data Center: The Future of Sustainable IT Infrastructures
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/ghaza.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Ghazanfar Iqbal</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80  max-w-xs overflow-x-hidden">
                      AWS (Indonesia, Malaysia, <br />
                      and Asia Emerging Markets)
                    </h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">15:30</td>
              <td class="px-6 py-2 border">16:00</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 7
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Green Transportation
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">16:00</td>
              <td class="px-6 py-2 border">17:00</td>
              <td class="px-6 py-2 border">1:00</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                PANEL DISCUSSION
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Green Financing for Green Manufacturing
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                17:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                18:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                1:00
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                END OF SESSIONS
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">18:00</td>
              <td class="px-6 py-2 border">21:00</td>
              <td class="px-6 py-2 border">3:00</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                GALA DINNER
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Round table - Seating arranged
              </th>
            </tr>
          </tbody>
        );
      case "Day 3":
        return (
          <tbody>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">08:00</td>
              <td class="px-6 py-2 border">09:00</td>
              <td class="px-6 py-2 border">1:00</td>
              <th scope="row" colSpan={2} class="border col-span-2 px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Open Registration
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:00</td>
              <td class="px-6 py-2 border">09:10</td>
              <td class="px-6 py-2 border">0:10</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Official Protocols
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Introduction
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:10</td>
              <td class="px-6 py-2 border">09:40</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                AWARDING
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Surviving a Startup - Business Plan Competition Winner Awarding
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:40</td>
              <td class="px-6 py-2 border">10:10</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Biz Talk 1
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Sustainability and Smart City
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/kepala-otoritas-ikn.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Ir. Bambang Susantono</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Head of Authority</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">of Nusantara Capital City (IKN)</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                10:10
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                10:40
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                0:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Coffee Break
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">10:40</td>
              <td class="px-6 py-2 border">11:10</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Biz Talk 2
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Human - AI Interaction and The Future Work
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/about-us/archan.jpeg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Prof. Archan Misra</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Singapore Management University (SMU)</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:10</td>
              <td class="px-6 py-2 border">11:40</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Biz Talk 3
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Digital Economy in Metaverse
                {/* <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/ghaza.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Ghazanfar Iqbal</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80  max-w-xs overflow-x-hidden">AWS (Indonesia, Malaysia, and Asia Emerging Markets)</h3>
                  </div>
                </div> */}
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:40</td>
              <td class="px-6 py-2 border">12:10</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Biz Talk 4
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Green Investment for Smart City
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                12:10
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                15:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                2:50
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                CLOSING & LUNCH
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking
              </th>
            </tr>
          </tbody>
        );
    }
  };

  return (
    <>
      <section id="schedule" className=" bg-slate-50 dark:bg-slate-800">
        <div className="container flex flex-wrap h-auto  mx-auto"></div>
        <div className="lg:w-full py-5">
          <h2 className="uppercase font-bold text-center text-2xl md:text-4xl dark:text-white mt-4 mb-8">Schedule</h2>

          <div className="w-full md:px-80 mx-auto text-center -mt-6 mb-6">
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

          <div class="relative overflow-x-auto sm:rounded-lg px-56 mx-auto">
            <table id="scheduleTable" class="w-full text-sm text-center text-gray-500 dark:text-gray-400 border">
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
              {getTableBodyContent("Day 1")}
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;
