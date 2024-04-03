import React from "react";
import { FaExclamation } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";

const Warning = ({ text }) => {
   return (
      <div className="warning h-auto py-2 rounded-lg bg-green-200 flex items-center gap-4 absolute top-6 w-full absolute-center-horizontal">
         <FaLightbulb className="rounded-full border-green-600 border h-6 w-6 ml-2 p-1 bg-green-600 text-green-100" />
         <h5 className="font-normal text-green-950 text-sm">{text}</h5>
      </div>
   );
};

export default Warning;
