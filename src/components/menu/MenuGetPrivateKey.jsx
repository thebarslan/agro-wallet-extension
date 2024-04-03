import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const MenuGetPrivateKey = () => {
   const [mnemonic, setMnemonic] = useState(
      "c4e371971db11979fada588f767aa4518b70f304e3b17df0e84b96e8fd99274a"
   );
   const stars =
      "********************************************************************";
   const [isMnemonicVisible, setIsMnemonicVisible] = useState(false);
   const handleCopy = () => {
      if (!isMnemonicVisible) {
         return;
      }
      navigator.clipboard.writeText(mnemonic);
   };

   return (
      <div className="get-private-key w-full h-full mt-4 flex flex-col justify-center items-center">
         <div className="title w-full flex items-center mb-3">
            <h5 className="text-base font-semibold text-white uppercase">
               Private Key:
            </h5>
         </div>
         <div className="container w-full relative flex border rounded-lg py-[24px] items-center justify-center gap-4">
            <div
               className={`break-words resize-none w-full pl-8 text-sm h-[60px] pr-8 flex items-center justify-center outline-none bg-transparent text-white font-medium relative ${
                  isMnemonicVisible ? `cursor-pointer` : ``
               }`}
               onClick={handleCopy}
            >
               <h5
                  className={`w-full ${
                     isMnemonicVisible ? `` : ` tracking-widest`
                  }`}
               >
                  {isMnemonicVisible ? mnemonic : stars}
               </h5>
               {isMnemonicVisible ? (
                  <MdOutlineContentCopy className="h-[24px] w-auto absolute -right-1" />
               ) : (
                  ``
               )}
            </div>
            <div className="password-eye cursor-pointer mr-3"></div>
         </div>
         <div className="button-container w-full flex flex-col mt-4 z-20">
            <button
               className="w-full bg-green-600 py-3 mb-8 rounded-3xl text-white text-sm uppercase disabled:opacity-50"
               onClick={() => setIsMnemonicVisible(!isMnemonicVisible)}
            >
               <h5>
                  {isMnemonicVisible ? `HIDE PRIVATE KEY` : `SHOW PRIVATE KEY`}
               </h5>
            </button>
         </div>
      </div>
   );
};

export default MenuGetPrivateKey;
