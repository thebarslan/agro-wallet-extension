import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const MenuNetworkChange = () => {
   const [isNetworkAddMenuOpen, setIsNetworkAddMenuOpen] = useState(false);

   const [networkName, setNetworkName] = useState("");
   const [currencyName, setCurrencyName] = useState("");
   const [symbol, setSymbol] = useState("");
   const [rpcURL, setRpcURL] = useState("");
   const [chainID, setChainID] = useState("");
   const [decimals, setDecimals] = useState("");

   const [networkIndex, setNetworkIndex] = useState(0);
   const mainNetworks = [
      "Ethereum",
      "Binance Smart Chain",
      "Polygon",
      "Avalanche",
      "Optimum",
      "Fantom",
   ];
   const testNetworks = [
      "Goerli",
      "Sepolia",
      "Mumbai",
      "BSC-Testnet",
      "Fuji Chain",
      "Optimism-Goerli",
      "Opera",
      "AGRO-Network",
   ];
   return (
      <div className="menu-network-change w-full h-full flex flex-col mt-2 py-2">
         {isNetworkAddMenuOpen ? (
            <div className="menu-add-network absolute w-full h-[520px] bg-green-800 top-0 left-0 z-50 rounded-xl flex flex-col p-4 justify-center gap-3">
               <div className="absolute top-2 right-2">
                  <button onClick={() => setIsNetworkAddMenuOpen(false)}>
                     <IoClose className="h-8 w-auto text-white" />
                  </button>
               </div>
               <div className="title w-full flex justify-center items-center mt-9">
                  <h5 className="text-xl font-semibold text-white uppercase mb-4">
                     ADD A CUSTOM NETWORK
                  </h5>
               </div>
               <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                  <input
                     placeholder="Network Name"
                     className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                     value={networkName}
                     onChange={(e) => setNetworkName(e.target.value)}
                  />
               </div>
               <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                  <input
                     placeholder="Currency Name"
                     className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                     value={currencyName}
                     onChange={(e) => setCurrencyName(e.target.value)}
                  />
               </div>
               <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                  <input
                     placeholder="Symbol"
                     className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                     value={symbol}
                     onChange={(e) => setSymbol(e.target.value)}
                  />
               </div>
               <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                  <input
                     placeholder="RPC URL"
                     className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                     value={rpcURL}
                     onChange={(e) => setRpcURL(e.target.value)}
                  />
               </div>
               <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                  <input
                     placeholder="Chain ID"
                     className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                     value={chainID}
                     onChange={(e) => setChainID(e.target.value)}
                  />
               </div>
               <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                  <input
                     placeholder="Decimals"
                     className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                     value={decimals}
                     onChange={(e) => setDecimals(e.target.value)}
                  />
               </div>
               <div className="button-container w-full flex-1 flex flex-col justify-end z-20">
                  <button className="w-full bg-white py-3 mb-4 rounded-lg text-green-700 text-sm uppercase disabled:opacity-50">
                     <h5>ADD NETWORK</h5>
                  </button>
               </div>
            </div>
         ) : (
            <></>
         )}

         <div className="title w-full flex justify-center items-center mb-3">
            <h5 className="text-base font-semibold text-white uppercase">
               Click a network to change
            </h5>
         </div>
         <div className="network-items flex flex-col h-[434px] w-full pr-4 overflow-y-scroll bg-transparent gap-2">
            <div className="mainnet flex flex-col gap-2">
               <h5 className="text-white mt-3 mb-1">Mainnet</h5>
               {mainNetworks.map((network, index) => (
                  <div
                     key={index}
                     className={`network-item w-full h-11 rounded-xl flex items-center px-4 text-white flex-shrink-0 justify-between cursor-pointer bg-[#ffffff3b] hover:bg-[#ffffff69]`}
                     onClick={() => setNetworkIndex(index)}
                  >
                     <h5>{network}</h5>
                  </div>
               ))}
            </div>
            <div className="testnet flex flex-col gap-2">
               <h5 className="text-white mt-3 mb-1">Testnet</h5>
               {testNetworks.map((network, index) => (
                  <div
                     key={index}
                     className={`network-item w-full h-11 rounded-xl flex items-center px-4 text-white flex-shrink-0 justify-between cursor-pointer bg-[#ffffff3b] hover:bg-[#ffffff69]`}
                     onClick={() => setNetworkIndex(index)}
                  >
                     <h5>{network}</h5>
                  </div>
               ))}
            </div>
            <div className="customnetworks flex flex-col gap-2">
               <h5 className="text-white mt-3 mb-1">Custom Networks</h5>
               <div className="button-container w-full flex-1 flex flex-col justify-end z-20">
                  <button
                     className="w-full bg-green-600 py-3 mb-1 rounded-lg text-white text-sm uppercase disabled:opacity-50"
                     onClick={() => setIsNetworkAddMenuOpen(true)}
                  >
                     <h5>Add Custom Network</h5>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MenuNetworkChange;
