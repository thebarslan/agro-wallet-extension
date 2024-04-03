import React, { useEffect, useState } from "react";
import AgroQr from "../../assets/images/agroqrcodedeneme.png";
import { IoClose } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const Menu2FA = () => {
   const [enable2FA, setEnable2FA] = useState(false);
   const [enable2FAmenu, setEnable2FAmenu] = useState(false);
   const [twofacode, setTwofacode] = useState("");
   const [isCopied, setIsCopied] = useState(false);
   const [buttonActive, setButtonActive] = useState(false);
   const secretCode = "123456";
   const handleCopy = () => {
      navigator.clipboard.writeText(secretCode);
      setIsCopied(true);
   };
   const handleEnable2FA = () => {
      setEnable2FAmenu(false);
      setEnable2FA(true);
   };
   const checkInputs = () => {
      if (twofacode != "") {
         return false;
      }
      return true;
   };
   const navigateToDashboard = () => {
      navigate("/dashboard");
   };
   const handleMenuOpen = () => {
      if (enable2FA) {
         setEnable2FA(false);
         return;
      }
      setEnable2FAmenu(true);
   };
   useEffect(() => {
      if (checkInputs()) {
         setButtonActive(false);
      } else {
         setButtonActive(true);
      }
   }, [twofacode]);

   return (
      <div className="2fa w-full flex flex-col">
         <div className="title w-full flex items-center mb-2 justify-center">
            <h5 className="text-base font-semibold text-white uppercase">
               Two Factor Authentication
            </h5>
         </div>
         <div className="button-container w-full flex justify-center items-center gap-5 mb-2">
            <h5 className="text-white">
               {enable2FA ? `Click to disable` : `Click to enable`}
            </h5>
            <div
               className="button-inside-container h-8 w-20 bg-shadow-relative rounded-3xl relative cursor-pointer"
               onClick={handleMenuOpen}
            >
               <div
                  className={`button-bg absolute w-full h-full left-0 top-0 rounded-3xl ${
                     enable2FA ? `open` : ``
                  }`}
               ></div>
               <div
                  className={`absolute button-ball h-8 w-8 rounded-full top-0  ${
                     enable2FA ? `open bg-green-500` : `bg-white`
                  }`}
               ></div>
            </div>
         </div>
         {enable2FAmenu && (
            <div className="2fa-enable absolute bg-shadow-relative-2 -left-0 h-[530px] w-full overflow-hidden flex flex-col p-2 -top-[114px]">
               <div className="top w-full flex mb-2">
                  <button onClick={() => setEnable2FAmenu(false)}>
                     <IoClose className="h-8 w-auto text-white" />
                  </button>
               </div>

               <div className="title w-full flex justify-center mb-3">
                  <p className="text-sm text-white">
                     Scan this QR code with your 2FA app.
                  </p>
               </div>
               <div className="qr-code-container rounded-xl w-full h-52 justify-center flex mb-1">
                  <img src={AgroQr} className="h-full w-auto rounded-xl" />
               </div>
               <div className="title w-full flex justify-center mb-1 py-1 mt-2 px-10">
                  <p className="text-sm text-white text-center">
                     You can also copy the secret code to use in your 2FA app.
                  </p>
               </div>
               <div className="copy-button w-full flex items-center justify-center mt-0 mb-3">
                  <button
                     className={`w-1/2 py-[6px] rounded-3xl px-8 uppercase text-base text-white flex items-center justify-center gap-3 z-20 ${
                        isCopied ? `bg-green-500` : `bg-shadow-relative `
                     }`}
                     onClick={handleCopy}
                  >
                     {isCopied ? (
                        <>
                           <FaCheck />
                           <h5>Copied</h5>
                        </>
                     ) : (
                        <>
                           <MdOutlineContentCopy className="h-[18px] w-auto" />
                           Copy
                        </>
                     )}
                  </button>
               </div>
               <div className="input-container w-2/3 mx-auto relative flex border rounded-lg py-[10px] items-center gap-4 mt-2">
                  <input
                     placeholder="Enter your 2fa code"
                     className="w-full text-sm flex items-center pl-5 outline-none bg-transparent text-white font-medium text-center"
                     value={twofacode}
                     onChange={(e) => setTwofacode(e.target.value)}
                  />
                  <div className="password-eye cursor-pointer mr-3"></div>
               </div>
               <div className="button-container w-full flex-1 flex flex-col justify-end mt-6 z-20">
                  <button
                     className="w-full bg-green-600 py-3 mb-8 rounded-lg text-white text-sm uppercase disabled:opacity-50"
                     disabled={!buttonActive}
                     onClick={handleEnable2FA}
                  >
                     <h5>VERIFY</h5>
                  </button>
               </div>
            </div>
         )}
      </div>
   );
};

export default Menu2FA;
