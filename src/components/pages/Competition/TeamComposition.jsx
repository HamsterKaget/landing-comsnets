import React from "react";
import { teamCompotition } from "../../data/competition";

const TeamCompotition = () => {
    function renderHTML(html) {
        return React.createElement("p", { dangerouslySetInnerHTML: { __html: html } });
    }

    return (
        <>
            <section id="teamCompotition">
                <div className="container bg-white dark:bg-slate-900 h-auto mx-auto my-4 p-4">
                    {teamCompotition.map((data) => (
                        <>
                            <div className="mt-8">
                                <div className="md:w-8/12 mx-auto text-center">
                                    {/* <h6 className="text-indigo-600 font-bold uppercase text-base">{data.section}</h6> */}
                                    <h1 className="uppercase font-bold text-2xl md:text-4xl dark:text-white">{data.title}</h1>
                                </div>
                            </div>
                            <div className="container flex">
                                <div className="lg:w-6/12 w-full p-12 order-last lg:order-first">
                                    <img src="/image/teamcompotition.png" alt="" className="rounded-xl" />
                                </div>
                                <div className="lg:w-6/12 w-full py-12">
                                    <div className="md:w-10/12 mx-auto text-left text-slate-500 dark:text-slate-400">
                                        {/* <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Eligibility & Team Composition</h2> */}
                                        <ul class="w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                            <li class="flex items-start">
                                                <svg class="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                Eligibility & Team CompositionAll team members must be currently enrolled as students at the university and maintain active student status until at least 2024.
                                            </li>
                                            <li class="flex items-start">
                                                <svg class="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                Must have a cumulative GPA of at least 2.75
                                            </li>
                                            <li class="flex items-start">
                                                <svg class="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                The competition will be conducted in English, and therefore, basic English knowledge is a requirement for all participants, including team members and the advisor
                                            </li>
                                            <li class="flex items-start">
                                                <svg class="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                Each team participating in the competition will consist of five students and one advisor. 
                                            </li>
                                            <li class="flex items-start">
                                                <svg class="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                The team composition must adhere to this requirement, with no exceptions. 
                                            </li>
                                            <li class="flex items-start">
                                                <svg class="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                The advisor will serve as a mentor and guide for the team throughout the competition, providing support and expertise as needed. 
                                            </li>
                                            <li class="flex items-start">
                                                <svg class="w-4 h-4 mr-1.5 mt-1 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                                The Advisor must be the lecturer of the same university.
                                            </li>
                                        </ul>

                                    </div>
                            </div>
                            </div>

                        </>
                    ))}
                </div>
            </section>
        </>
    );
};

export default TeamCompotition;
