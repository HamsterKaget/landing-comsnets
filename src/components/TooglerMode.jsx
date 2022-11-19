import React, { useState } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { RiCloseFill } from "react-icons/ri";

const TooglerMode = () => {
    let navigation = [
        { name: "Home", to: "/" },
        { name: "Event", to: "#" },
        { name: "Activity", to: "#" },
        { name: "Contact", to: "#" },
    ];
    // const [open, setOpen] = useState(false);
    const [nightMode, setNightMode] = useState(false);

    function changeMode() {
        // console.log('ada')
        var element = document.getElementById("html");
        element.classList.toggle("dark");
        console.log(element);
    }
    return (
        <>
            <div
                onClick={() => {
                    setNightMode(!nightMode);
                    changeMode();
                }}
                className="z-20 text-3xl right-4 bottom-4 cursor-pointer p-3 border rounded-full bg-slate-800 borded border-yellow-200 fixed"
            >
                {nightMode ? <BsSun className="text-yellow-200" /> : <BsMoonStarsFill className="text-yellow-200" />}
            </div>
        </>
    );
};

export default TooglerMode;
