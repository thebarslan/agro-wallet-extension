import React, { useEffect, useState } from "react";
import WhiteSpace from "../components/common/WhiteSpace";
import BackArrow from "../components/common/BackArrow";
import Warning from "../components/common/Warning";
import { useNavigate } from "react-router-dom";

const WalletLogin = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [mnemonic, setMnemonic] = useState("");
   const [buttonActive, setButtonActive] = useState(false);
   const navigate = useNavigate();
   const checkInputs = () => {
      if (username != "" && password != "" && mnemonic != "") {
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
   }, [username, password, mnemonic]);
   return (
      <div className="wallet-login flex flex-col">
         <BackArrow path="/" pageName="Login Wallet" />
         <WhiteSpace>
            <div className="wallet-login-container w-full h-full flex flex-col flex-1">
               <div className="inside-container h-full w-full mt-4">
                  <div className="login-container w-full h-[450px] relative bg-shadow-relative flex flex-col gap-2 justify-center text-white p-4">
                     <div className="title w-full flex justify-center items-center mt-0 mb-5">
                        <h5 className="text-xl font-semibold text-white uppercase">
                           Login to your wallet
                        </h5>
                     </div>
                     <div className="input-bigger-container w-full">
                        <h5 className="text-sm ml-1 mb-1">Username</h5>
                        <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                           <input
                              placeholder="Enter your username"
                              className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                           />
                           <div className="password-eye cursor-pointer mr-3"></div>
                        </div>
                     </div>
                     <div className="input-bigger-container w-full">
                        <h5 className="text-sm ml-1 mb-1">Password</h5>
                        <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                           <input
                              placeholder="Enter your password"
                              className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                           />
                           <div className="password-eye cursor-pointer mr-3"></div>
                        </div>
                     </div>
                     <div className="warning w-full relative h-12 mt-6">
                        <Warning text="Order the words correctly" />
                     </div>
                     <div className="input-bigger-container w-full">
                        <h5 className="text-sm ml-1 mb-1">Mnemonic</h5>
                        <div className="input-container w-full relative flex border rounded-lg py-[24px] items-center gap-4">
                           <input
                              placeholder="Enter your mnemonic words"
                              className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                              value={mnemonic}
                              onChange={(e) => setMnemonic(e.target.value)}
                           />
                           <div className="password-eye cursor-pointer mr-3"></div>
                        </div>
                     </div>
                  </div>
                  <div className="button-container w-full flex-1 flex flex-col justify-end mt-4 z-20">
                     <button
                        className="w-full bg-green-600 py-3 mb-8 rounded-lg text-white text-sm uppercase disabled:opacity-50"
                        disabled={!buttonActive}
                        onClick={navigateToDashboard}
                     >
                        <h5>LOGIN WALLET</h5>
                     </button>
                  </div>
               </div>
            </div>
         </WhiteSpace>
      </div>
   );
};

export default WalletLogin;
