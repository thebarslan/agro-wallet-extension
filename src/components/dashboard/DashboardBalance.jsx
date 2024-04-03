import React from "react";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const DashboardBalance = () => {
   const navigate = useNavigate();
   return (
      <div className="bg-shadow-relative w-full h-auto py-2 px-6 rounded-xl mt-2 mb-2 flex justify-between items-center text-white gap-1">
         <div className="left flex flex-col">
            <h5 className="text-[16px]">Balance</h5>
            <div className="balance-text text-xl font-semibold  rounded-xl text-white flex gap-2">
               <h5>4.2135</h5>
            </div>
         </div>
         <div className="right">
            <button
               className="px-2 py-1 rounded-3xl flex items-center justify-center gap-2"
               onClick={() => navigate("/sendtransaction")}
            >
               <IoSend className="h-7 w-auto hover:text-[#48cf0ab4]" />
            </button>
         </div>
      </div>
   );
};

export default DashboardBalance;
