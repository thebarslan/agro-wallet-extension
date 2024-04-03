import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackArrow = ({ path, pageName }) => {
   const navigate = useNavigate();
   const handleNavigation = () => {
      navigate(path);
   };
   return (
      <div className="back-arrow w-full h-12 flex items-center relative bg-shadow rounded-none">
         <button
            className="w-4 h-4  rounded-xl flex items-center justify-center ml-4  hover:text-green-300 text-white"
            onClick={handleNavigation}
         >
            <FaArrowLeft className=" w-4 h-auto" />
         </button>
         <h5 className="absolute absolute-center uppercase font-medium text-white">
            {pageName}
         </h5>
      </div>
   );
};

export default BackArrow;
