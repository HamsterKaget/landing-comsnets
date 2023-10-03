import React from "react";
import "./SeatingPreview.css"; // Import your CSS file

const SeatingPreview = () => {
  // const progressWidth = 0.6;
  // // Get the progress bar element
  // const progressBar = document.getElementById("progress-bar");
  // // Set the width dynamically using JavaScript
  // progressBar.style.width = progressWidth * 100 + "%";
  return (
    <section id="seating-preview" className="bg-slate-50 dark:bg-slate-800 ">
      <div className="container mx-auto p-4">
        <div className="my-8">
          <div className="md:w-8/12 mx-auto text-center">
            <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Event Seating Preview</h1>
            <p className="text-slate-500 mt-2 mb-6">Preview current available seat.</p>
          </div>
        </div>
        {/* Seating Layout */}
        <div className="container flex flex-col justify-center items-center pb-8">
          <div className="screen text-center border border-slate-700 dark:border-indigo-600">
            <strong>S T A G E</strong>
          </div>
          <div className="grid grid-cols-5 gap-x-4 gap-y-8 mt-6">
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat-selected"></div>
                <div className="seat-selected"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>
            </div>
          </div>
          <div className="mx-auto min-w-sm w-96 container mt-10 mb-4 ">
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-indigo-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" id="progress-bar" style={{ width: "28%" }}>
                28%
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <div className="flex justify-center space-x-2">
              <div className="wrapper dark:text-slate-300 font-semibold flex justify-center items-center">
                <div className="seat-selected"></div>
                <span class="ml-1.5 mr-1.5">
                  {" "}
                  Occupied <span class="text-slate-400 text-sm">(84)</span>
                </span>
              </div>
              <span className="dark:text-slate-400">/</span>
              <div className="wrapper dark:text-slate-300 font-semibold flex justify-center items-center">
                <div className="seat"></div>
                <span class="ml-1.5 mr-1.5">
                  {" "}
                  Available <span class="text-slate-400 text-sm">(216)</span>
                </span>
              </div>
            </div>
            <p className="text-center dark:text-slate-200 text-sm opacity-80">*Free Seating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeatingPreview;
