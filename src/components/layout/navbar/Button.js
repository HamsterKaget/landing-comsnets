import React from "react";

const Button = (props) => {
  return <button className="bg-emerald-600 text-white py-2 px-6 rounded lg:ml-4 hover:bg-emerald-400 duration-500">{props.children}</button>;
};

export default Button;
