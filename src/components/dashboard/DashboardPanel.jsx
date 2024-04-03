import React, { useState } from "react";
import DashboardTokens from "./DashboardTokens";

const DashboardPanel = () => {
   const [index, setIndex] = useState(0);
   return (
      <div className="dashboard-panel flex flex-col bg-shadow-relative pt-1 pb-2 px-2 h-[285px]">
         <div className="w-full h-auto flex justify-center pt-[10px] gap-[10px] text-white z-10 rounded-xl font-normal">
            <button
               className={` px-[20px] py-[2px] rounded-xl hover:bg-[#e5f1e3fd] hover:text-black ${
                  index === 0
                     ? `bg-[#e5f1e3fd] text-black`
                     : `bg-shadow-relative`
               }`}
               onClick={() => setIndex(0)}
            >
               Tokens
            </button>
            <button
               className={` px-[20px] py-[2px] rounded-xl hover:bg-[#e5f1e3fd] hover:text-black ${
                  index === 1
                     ? `bg-[#e5f1e3fd] text-black`
                     : `bg-shadow-relative`
               }`}
               onClick={() => setIndex(1)}
            >
               NFTs
            </button>
            <button
               className={` px-[20px] py-[2px] rounded-xl hover:bg-[#e5f1e3fd] hover:text-black ${
                  index === 2
                     ? `bg-[#e5f1e3fd] text-black`
                     : `bg-shadow-relative`
               }`}
               onClick={() => setIndex(2)}
            >
               Activity
            </button>
         </div>
         <div className="inside w-full h-[220px] flex items-center text-white">
            {index === 0 && <DashboardTokens />}
            {index === 1 && <h1>No NFTs found.</h1>}
            {index === 2 && <h1>No Activity found.</h1>}
         </div>
      </div>
   );
};

export default DashboardPanel;
