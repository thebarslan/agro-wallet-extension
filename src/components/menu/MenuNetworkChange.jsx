import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";

const MenuNetworkChange = () => {
   const [networkIndex, setNetworkIndex] = useState(0);
   const networks = [
      "Ethereum",
      "Bitcoin",
      "Avalaunch",
      "Ethereum2",
      "Ethereum3",
      "Ethereum4",
      "Ethereum5",
      "Ethereum6",
      "Ethereum7",
      "Ethereum8",
   ];
   return (
      <div className="menu-network-change w-full h-full flex flex-col mt-4">
         <div className="title w-full flex justify-center items-center mb-3">
            <h5 className="text-base font-semibold text-white uppercase">
               Click a network to change
            </h5>
         </div>
         <div className="network-items flex flex-col h-[290px] w-full pr-4 overflow-y-scroll bg-transparent gap-2 pb-1">
            {networks.map((network, index) => (
               <div
                  key={index}
                  className={`network-item w-full h-11 rounded-xl flex items-center px-4 text-white flex-shrink-0 justify-between cursor-pointer ${
                     networkIndex === index ? `bg-green-600` : `bg-[#ffffff3b]`
                  } `}
                  onClick={() => setNetworkIndex(index)}
               >
                  <h5>{network}</h5>
                  {networkIndex === index && (
                     <CiCircleCheck className="h-7 w-auto" />
                  )}
               </div>
            ))}
         </div>
      </div>
   );
};

export default MenuNetworkChange;
