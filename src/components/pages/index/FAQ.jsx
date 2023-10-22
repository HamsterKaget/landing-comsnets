"use client";
import React from "react";
import { Accordion } from "flowbite-react";
import { faq } from "../../data/data";
import { Link } from "react-router-dom";

const FAQ = () => {
  function renderHTML(html) {
    return React.createElement("p", { dangerouslySetInnerHTML: { __html: html } });
  }
  return (
    <>
      <section id="eventDetail" className=" bg-white dark:bg-slate-900 h-auto w-full py-0.5">
        <div className="container mx-auto w-full">
          <div className="my-8">
            <div className="md:w-8/12 mx-auto text-center">
              <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">Frequently Asked Questions.</h1>
              <p className="text-slate-500 mt-2 mb-2">Check out Frequently Asked Question.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-12 pb-8 md:w-10/12">
              <Accordion>
                {faq.map((item, index) => (
                  <Accordion.Panel key={index}>
                    <Accordion.Title>{item.question}</Accordion.Title>
                    <Accordion.Content>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">{renderHTML(item.answer)}</p>
                    </Accordion.Content>
                  </Accordion.Panel>
                ))}
                {/* <Accordion.Panel>
                  <Accordion.Title>What is comsnets workshop bali ?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    </p>
                  </Accordion.Content>
                </Accordion.Panel> */}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
