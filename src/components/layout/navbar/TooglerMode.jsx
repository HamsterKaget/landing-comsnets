import React, { useState } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { FloatingWhatsApp } from "react-floating-whatsapp";
// import avatar from "/image/bali1.jpg";

const TooglerMode = () => {
  const [nightMode, setNightMode] = useState(false);

  function changeMode() {
    // console.log('ada')
    var element = document.getElementById("html");
    element.classList.toggle("dark");
    // console.log(element);
  }
  return (
    <>
      <div
        onClick={() => {
          setNightMode(!nightMode);
          changeMode();
        }}
        className="z-20 text-2xl lg:text-3xl right-6 sm:top-20 top-16 cursor-pointer p-3 border rounded-full bg-slate-800 borded border-yellow-200 fixed"
      >
        {nightMode ? <BsSun className="text-yellow-200" /> : <BsMoonStarsFill className="text-yellow-200" />}
      </div>
      <FloatingWhatsApp
        statusMessage="Online"
        chatMessage="
            Hello 👋, how may we assist you?
        "
        avatar="/image/favicon.png"
        phoneNumber="+6281267560600"
        accountName="Gathering in Bali"
        darkMode={nightMode ? true : false}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </>
  );
};

export default TooglerMode;
