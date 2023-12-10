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
              <td></td>
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
                Opening By MX
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:10</td>
              <td class="px-6 py-2 border">09:15</td>
              <td class="px-6 py-2 border">0:05</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"></th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                National Anthem "Indonesia Raya"
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:15</td>
              <td class="px-6 py-2 border">09:20</td>
              <td class="px-6 py-2 border">0:05</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Bali Performance
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Cultural Performance
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:20</td>
              <td class="px-6 py-2 border">09:30</td>
              <td class="px-6 py-2 border">0:15</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Opening Speech
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Indonesia Emas 2045
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  {/* <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="flex justify-center items-center text-indigo-600 text-sm font-bold">
                      <svg className="w-3 h-3 mr-1.5 text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      Potential Speaker
                    </h3>
                  </div> */}
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/person.jpg" alt="Yukki N Hanafi" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Mr Made Ariandi</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">General Chairman of KADIN Bali province,</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:30</td>
              <td class="px-6 py-2 border">09:40</td>
              <td class="px-6 py-2 border">0:10</td>
              <td></td>
              <th scope="row" class="border col-span-2 px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Opening Ceremony
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:40</td>
              <td class="px-6 py-2 border">09:55</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Keynote Speech
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Indonesia's National Digital Transformation Strategy
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="flex justify-center items-center text-indigo-600 text-sm font-bold">
                      <svg className="w-3 h-3 mr-1.5 text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      Potential Speaker
                    </h3>
                  </div>
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/menkominfo.jpg" alt="budie-arie" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Budi Arie Setiadi</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">
                      Minister of Communication and
                      <br />
                      Information of the Republic of Indonesia
                    </h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:55</td>
              <td class="px-6 py-2 border">10:25</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 1
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Digital and Green Technology for the Planet
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="flex justify-center items-center text-indigo-600 text-sm font-bold">
                      <svg className="w-3 h-3 mr-1.5 text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      Potential Speaker
                    </h3>
                  </div>
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/new/Dr-ilham.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Dr. H. Ilham Akbar Habibie,</h3>
                    <h3 className="font-bold text-xl">Dipl.Ing, MBA</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Head of Reaserch & Technology KADIN</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">10:25</td>
              <td class="px-6 py-2 border">11:40</td>
              <td class="px-6 py-2 border">0:15</td>
              <td class="px-6 py-2 border"></td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Q & A
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="3">
                10:40
              </td>
              <td class="px-6 py-2 border" rowspan="3">
                11:10
              </td>
              <td class="px-6 py-2 border" rowspan="3">
                0:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="3">
                Coffee Break
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit at Ballroom foyer
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking ( Business Meeting )
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Coaching Class (Sponsor's Booth)
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:10</td>
              <td class="px-6 py-2 border">11:40</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 2
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Building the Emerging Smart World
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/new/Brett-King.png" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Brett King</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Futurist & Author</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:40</td>
              <td class="px-6 py-2 border">11:55</td>
              <td class="px-6 py-2 border">0:15</td>
              <td class="px-6 py-2 border"></td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Q & A
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                11:55
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                13:25
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                1:45
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Lunch @ Resto
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking ( Business Meeting )
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">13:25</td>
              <td class="px-6 py-2 border">13:55</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 3
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {/* Future of Money in Indonesia */}
                Navigating The Future of Digital Transformation in Indonesia : Business Strategy, and Cybercrime Awareness
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/new/Sarwoto Atmosutarno.webp" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Sarwoto Atmosutarno</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Chairman of Mastel</h3>
                  </div>
                </div>
              </th>
            </tr>
            {/* <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">13:55</td>
              <td class="px-6 py-2 border">14:40</td>
              <td class="px-6 py-2 border">0:45</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 4
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Financial Paymet System Technological Innovation in Indonesia
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/person.png" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Herlina Kalla</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">CEO Arash Digital</h3>
                  </div>
                </div>
              </th>
            </tr> */}
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">13:55</td>
              <td class="px-6 py-2 border">14:40</td>
              <td class="px-6 py-2 border">0:45</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 4 | Q & A
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Cyber Threat Intelligences
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/new/huzur.jpg" alt="Prof. Dr. Huzur Saran" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Prof. Dr. Huzur Saran</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Indian Institute of Technology (IIT)</h3>
                  </div>
                </div>
              </th>
            </tr>
            {/* <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">14:40</td>
              <td class="px-6 py-2 border">15:25</td>
              <td class="px-6 py-2 border">0:45</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 6 | Q ^ A
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Cyber Attacks - How to Mitigate Risks
              </th>
            </tr> */}
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">14:40</td>
              <td class="px-6 py-2 border">15:25</td>
              <td class="px-6 py-2 border">0:45</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 5 | Q & A
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Blockchain , CBDC and Data Privacy
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/new/Venkatesh.png" alt="Dr. G. Venkatesh" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Dr. G. Venkatesh</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">SASKEN Technologies, Ltd, Bangalore</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">15:25</td>
              <td class="px-6 py-2 border">16:10</td>
              <td class="px-6 py-2 border">0:45</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Panel Discussion
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Navigating The Future of Cyber : Business Strategy, Cybercrime Awareness and Digital Transformation Are Keys
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b  dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="3">
                16:10
              </td>
              <td class="px-6 py-2 border" rowspan="3">
                16:40
              </td>
              <td class="px-6 py-2 border" rowspan="3">
                0:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="3">
                Coffee Break
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit at Ballroom foyer
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Coaching Class (sponsor's booth)
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking ( Business Meeting ) (Business Meeting) )
              </th>
            </tr>
            <tr class="bg-blue-50 border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" colSpan={3}>
                16:40
              </td>
              <td></td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                End Of Discussion
              </th>
              {/* <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Cyber Threat Intelligences
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/new/huzur.jpg" alt="Prof. Dr. Huzur Saran" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Prof. Dr. Huzur Saran</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Indian Institute of Technology (IIT)</h3>
                  </div>
                </div>
              </th> */}
            </tr>
            {/* <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
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
                Networking ( Business Meeting  )
              </th>
            </tr> */}

            {/* <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">18:00</td>
              <td class="px-6 py-2 border">21:00</td>
              <td class="px-6 py-2 border">3:00</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking ( Business Meeting ) Dinner
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Round table - Seating arranged
              </th>
            </tr> */}
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
                Opening
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
                Indonesia and India to work together to strengthen digital and green economy
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
              <td class="px-6 py-2 border">10:50</td>
              <td class="px-6 py-2 border">0:40</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 1
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Bursa Karbon Promotes Green Economy
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/logo-ojk.png" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Financial Services Authority</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">(OJK)</h3>
                  </div>
                </div>
              </th>
            </tr>

            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                10:50
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                11:20
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
                Networking ( Business Meeting )
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:20</td>
              <td class="px-6 py-2 border">12:00</td>
              <td class="px-6 py-2 border">0:40</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 2
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
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                12:10
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                13:40
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                1:30
              </td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Lunch at Resto
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Demo & Exhibit
              </th>
            </tr>
            <tr className="bg-gray-100 dark:bg-slate-800">
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking ( Business Meeting )
              </th>
            </tr>
            {/* <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">13:40</td>
              <td class="px-6 py-2 border">14:05</td>
              <td class="px-6 py-2 border">0:25</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 3
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Green Transportation
               
              </th>
            </tr> */}

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">13:40</td>
              <td class="px-6 py-2 border">14:05</td>
              <td class="px-6 py-2 border">0:25</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 3
              </th>
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
              <td class="px-6 py-2 border">14:05</td>
              <td class="px-6 py-2 border">14:40</td>
              <td class="px-6 py-2 border">0:35</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 4
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Emission Reduction in Small-Medium Enterprise
                {/* <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="flex justify-center items-center text-indigo-600 text-sm font-bold">
                      <svg className="w-3 h-3 mr-1.5 text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      Potential Speaker
                    </h3>
                  </div>
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/natalia-rialucky.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">FAIRATMOS</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">CEO Fairatmos</h3>
                  </div>
                </div> */}
              </th>
            </tr>
            {/* <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">14:30</td>
              <td class="px-6 py-2 border">15:00</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 6
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Global Value Chains: Digital and Green Transformations
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="flex justify-center items-center text-indigo-600 text-sm font-bold">
                      <svg className="w-3 h-3 mr-1.5 text-indigo-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      Potential Speaker
                    </h3>
                  </div>
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/dr-alfred-boediman.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Dr. Alfred Boediman PhD</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Partner of Jawara Ventures</h3>
                  </div>
                </div>
              </th>
            </tr> */}
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">14:40</td>
              <td class="px-6 py-2 border">15:15</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Session 5
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Tackle Climate Change with Technology Innovation
                {/* <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">                  
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./image/natalia-rialucky.jpg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Huawei Tech Investment</h3>                    
                  </div>
                </div> */}
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b  dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                15:15
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                15:50
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                0:35
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
                Networking ( Business Meeting )
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">15:50</td>
              <td class="px-6 py-2 border">16:25</td>
              <td class="px-6 py-2 border">0:35</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                PANEL DISCUSSION
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Green Financing for Green Manufacturing
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                16:25
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                {/* 18:00 */}
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                {/* 1:00 */}
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
                Networking ( Business Meeting )
              </th>
            </tr>
            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">18:00</td>
              <td class="px-6 py-2 border">21:00</td>
              <td class="px-6 py-2 border">3:00</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Networking ( Business Meeting ) Dinner
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
              <td class="px-6 py-2 border">08:30</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" colSpan={2} class="border col-span-2 px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Open Registration
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">08:30</td>
              <td class="px-6 py-2 border">08:40</td>
              <td class="px-6 py-2 border">0:10</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Official Protocols
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Opening
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">08:40</td>
              <td class="px-6 py-2 border">09:10</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Morning BizTalk 1
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Human - AI Interaction and The Future Work
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/new/archan.png" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Prof. Archan Misra</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Singapore Management University (SMU)</h3>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:10</td>
              <td class="px-6 py-2 border">09:40</td>
              <td class="px-6 py-2 border">0:30</td>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Morning BizTalk 2
              </th>
              <th scope="row" className="group relative hover:text-indigo-600 dark:hover:text-indigo-600 border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Gen AI Role In The Digital Transformation Era
                <div className="absolute top-[-100px] border dark:border-slate-200 border-slate-400 -right-12 w-full mx-auto max-w-xs rounded-xl hidden group-hover:flex transition-all duration-500 flex-col space-y-2 justify-center items-center z-10 bg-gray-100 dark:bg-slate-700 p-4">
                  <div className="image w-32 h-32 p-1 rounded-full">
                    <img src="./speaker/new/Ady Suryawan.jpeg" alt="person" className="w-full h-full rounded-full object-cover border border-indigo-600" />
                  </div>
                  <div className="flex text-center text-slate-800 dark:text-white flex-col justify-start">
                    <h3 className="font-bold text-xl">Ady Suryawan</h3>
                    <h3 className="dark:text-slate-100 text-slate-900 opacity-80">Costumer Solutions Consultant at Google Cloud I</h3>
                  </div>
                </div>
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">09:40</td>
              <td class="px-6 py-2 border">10:10</td>
              <td class="px-6 py-2 border">0:30</td>
              <th colSpan={2} scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Business Discussion & Networking
              </th>
              {/* <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Build Green Data Centre to Support Smart City
              </th> */}
            </tr>
            {/* 

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:10</td>
              <td class="px-6 py-2 border">11:25</td>
              <td class="px-6 py-2 border">0:15</td>
              <th scope="row" rowspan="2" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Business Inspiration & Discussion
              </th>
              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Champion Presentation
              </th>
            </tr>

            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border">11:25</td>
              <td class="px-6 py-2 border">11:45</td>
              <td class="px-6 py-2 border">0:20</td>

              <th scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Champion Awarding
              </th>
            </tr>

            <tr class="bg-gray-100 dark:bg-slate-800 border-b dark:border-gray-700 text-gray-900 dark:text-white">
              <td class="px-6 py-2 border" rowspan="2">
                11:45
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                12:00
              </td>
              <td class="px-6 py-2 border" rowspan="2">
                0:15
              </td>
              <th scope="row" colspan="2" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white" rowspan="2">
                Closing
              </th>
            </tr> */}
            <tr class="bg-blue-50 border-b dark:bg-gray-900 dark:border-gray-700 text-gray-900 dark:text-white">
              <td colSpan={3}></td>
              <th colSpan={2} scope="row" class="border px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                CLOSING
              </th>
            </tr>
          </tbody>
        );
    }
  };

  return (
    <>
      <section id="schedule" className=" bg-slate-100 dark:bg-slate-900">
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

          <div class="relative overflow-x-auto sm:rounded-lg px-56 mx-auto my-4">
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
