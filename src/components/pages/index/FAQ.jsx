"use client";
import React from "react";
import { Accordion } from "flowbite-react";
import { eventDetails } from "../../data/data";
import { Link } from "react-router-dom";

const FAQ = () => {
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
            <div className="w-full px-12 pb-8 md:w-8/12">
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title>What is Flowbite?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      <p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      <p>Check out this guide to learn how to</p>
                      <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://flowbite.com/docs/getting-started/introduction/">
                        <p>get started</p>
                      </a>
                      <p>and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      <p>Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      <p>Check out the</p>
                      <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://flowbite.com/figma/">
                        <p>Figma design system</p>
                      </a>
                      <p>based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      <p>
                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                        components, whereas Tailwind UI offers sections of pages.
                      </p>
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      <p>However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                      <li>
                        <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://flowbite.com/pro/">
                          <p>Flowbite Pro</p>
                        </a>
                      </li>
                      <li>
                        <a className="text-cyan-600 hover:underline dark:text-cyan-500" href="https://tailwindui.com/" rel="nofollow">
                          <p>Tailwind UI</p>
                        </a>
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
