import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { PiCopySimpleLight } from "react-icons/pi";
import { BsCopy } from "react-icons/bs";

const DashboardWalletAddress = () => {
   const [walletAddress, setWalletAddress] = useState(
      "0xb794f5ea0ba39494ce839613fffba74279579268"
   );
   const handleWalletAddressCopy = () => {
      navigator.clipboard.writeText(walletAddress);
   };

   return (
      <div className="bg-shadow-relative w-full h-auto pt-3 pb-4 px-6 text-white rounded-xl flex flex-col gap-1 mt-4">
         <h5 className="text-[18px]">Wallet Address</h5>
         <div
            className="address-box relative w-full bg-shadow-relative pl-4 pr-16 py-2 text-clip whitespace-normal text-white rounded-lg break-words cursor-pointer hover:bg-[#ffffff3d]"
            onClick={handleWalletAddressCopy}
         >
            <h5 className="font-[450] text-sm">{walletAddress}</h5>
            <PiCopySimpleLight className="h-7 w-auto absolute right-3 top-[14px]" />
         </div>
         <div className="active-chain w-full h-auto bg-shadow-relative flex justify-between items-center rounded-lg py-1 pl-4 pr-[10px] text-sm mt-1">
            <h5>Active Chain</h5>
            <h5 className="px-5 bg-shadow-relative py-[1px] rounded-xl text-[13px]">
               Ethereum
            </h5>
         </div>
      </div>
   );
};

export default DashboardWalletAddress;
