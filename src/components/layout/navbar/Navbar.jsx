import React, { useState } from "react";
import Button from "./Button";
import { TbMenu2 } from "react-icons/tb";
import { RiCloseFill } from "react-icons/ri";
import { navigation } from "../../data/data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const [nightMode, setNightMode] = useState(false);
  return (
    <>
      <nav className="shadow-lg w-full fixed top-0 left-0 z-50 opacity-90 bg-slate-50 dark:bg-slate-800">
        <div className="lg:flex container mx-auto items-center justify-between py-2 lg:px-10 px-7">
          <div className="text-xl cursor-pointer flex items-center justify-between dark:text-white">
            <Link to={"/home"}>
              <img src="favicon.png" alt="" className="h-8 w-8 mx-4 inline-block" />
              gatheringinbali
            </Link>
            <div onClick={() => setOpen(!open)} className="text-3xl my-auto lg:hidden">
              {open ? <RiCloseFill className="dark:text-white" /> : <TbMenu2 className="dark:text-white" />}
            </div>
          </div>
          <ul
            className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute text-center lg:static bg-slate-50 dark:bg-slate-800 dark:text-white lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-[top] duration-500 ease-in ${
              open ? "top-[46px]" : "top-[-520px]"
            }`}
          >
            {navigation.map((nav) => {
              if (nav.subMenu) {
                return (
                  <li key={nav.name} className="relative my-4 mx-2 group">
                    <span className="rounded-t cursor-pointer px-4 py-2 ">
                      {nav.name}
                      <span className="absolute top-1/2 right-0 -mr-3 transform -translate-y-1/2 transition-transform duration-300 -rotate-90 group-hover:rotate-0">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M5.293 6.707a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </span>
                    </span>
                    <ul className={`absolute z-50 hidden bg-slate-50 dark:bg-slate-800 dark:text-white px-4 top-8 -left-4 rounded-lg group-hover:block ${nav.mobileMenu ? "block md:hidden" : ""}`}>
                      {nav.subMenu && (
                        <ul className="absolute bg-white shadow-lg rounded-md w-48 dark:bg-slate-800 dark:text-white">
                          {nav.subMenu.map((subNav) => (
                            <li key={subNav.name} className={`px-4 py-2 hover:bg-indigo-600 hover:text-white duration-300 first:rounded-tr-md last:rounded-b-md ${nav.mobileMenu ? "block md:hidden" : "hidden md:block"}`}>
                              <Link to={subNav.to}>{subNav.name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <Link key={nav.name} to={nav.to}>
                    <li className="px-4 py-2 my-2 mx-2 hover:bg-indigo-600 hover:text-white duration-300 rounded">{nav.name}</li>
                  </Link>
                );
              }
            })}
            <Link to="https://shop.gatheringinbali.com">
              <Button>Register Now !</Button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
