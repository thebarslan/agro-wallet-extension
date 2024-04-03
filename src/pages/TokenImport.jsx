import React, { useEffect, useState } from "react";
import WhiteSpace from "../components/common/WhiteSpace";
import BackArrow from "../components/common/BackArrow";
import { useNavigate } from "react-router-dom";

const TokenImport = () => {
   const [tokenAddress, setTokenAddress] = useState("");
   const [tokenName, setTokenName] = useState("");
   const [tokenSymbol, setTokenSymbol] = useState("");
   const [tokenDecimal, setTokenDecimal] = useState("");
   const [buttonActive, setButtonActive] = useState(false);
   const navigate = useNavigate();
   const checkInputs = () => {
      if (
         tokenAddress != "" &&
         tokenName != "" &&
         tokenSymbol != "" &&
         tokenDecimal != ""
      ) {
         return false;
      }
      return true;
   };
   const navigateToDashboard = () => {
      navigate("/dashboard");
   };
   useEffect(() => {
      if (checkInputs()) {
         setButtonActive(false);
      } else {
         setButtonActive(true);
      }
   }, [tokenAddress, tokenName, tokenSymbol, tokenDecimal]);
   return (
      <div className="token-import w-full h-full">
         <BackArrow path="/dashboard" pageName="Import Token" />
         <WhiteSpace>
            <div className="token-import-container h-[550px] w-full flex flex-col gap-2 justify-center">
               <div className="inside-container h-[460px] bg-shadow-relative mt-6 flex flex-col justify-center gap-4 px-4">
                  <div className="title w-full flex justify-center items-center mt-0 mb-5">
                     <h5 className="text-xl font-semibold text-white uppercase">
                        IMPORT A TOKEN
                     </h5>
                  </div>
                  <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                     <input
                        placeholder="Token Address"
                        className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                        value={tokenAddress}
                        onChange={(e) => setTokenAddress(e.target.value)}
                     />
                     <div className="password-eye cursor-pointer mr-3"></div>
                  </div>
                  <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                     <input
                        placeholder="Token Name"
                        className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                        value={tokenName}
                        onChange={(e) => setTokenName(e.target.value)}
                     />
                     <div className="password-eye cursor-pointer mr-3"></div>
                  </div>
                  <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                     <input
                        placeholder="Token Symbol"
                        className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                        value={tokenSymbol}
                        onChange={(e) => setTokenSymbol(e.target.value)}
                     />
                     <div className="password-eye cursor-pointer mr-3"></div>
                  </div>
                  <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                     <input
                        placeholder="Token Decimal"
                        className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                        value={tokenDecimal}
                        onChange={(e) => setTokenDecimal(e.target.value)}
                     />
                     <div className="password-eye cursor-pointer mr-3"></div>
                  </div>
               </div>
               <div className="button-container w-full flex-1 flex flex-col justify-end mt-4 z-20">
                  <button
                     className="w-full bg-green-600 py-3 mb-8 rounded-lg text-white text-sm uppercase disabled:opacity-50"
                     disabled={!buttonActive}
                     onClick={navigateToDashboard}
                  >
                     <h5>IMPORT TOKEN</h5>
                  </button>
               </div>
            </div>
         </WhiteSpace>
      </div>
   );
};

export default TokenImport;
