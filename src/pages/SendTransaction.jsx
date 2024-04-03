import React, { useState } from "react";
import BackArrow from "../components/common/BackArrow";
import WhiteSpace from "../components/common/WhiteSpace";

const SendTransaction = () => {
   const [address, setAddress] = useState("");
   const [amount, setAmount] = useState();
   return (
      <div className="send-transaction">
         <BackArrow path="/dashboard" pageName="Send Transaction" />
         <WhiteSpace>
            <div className="container flex flex-col gap-4 mt-4 justify-center">
               <div className="balance-container bg-shadow-relative flex items-center p-4 text-white justify-between">
                  <h5 className="text-xl">Your Balance</h5>
                  <h5 className="text-xl font-semibold px-6 py-1 bg-shadow-relative">
                     2.3451
                  </h5>
               </div>
               <div className="transaction-container bg-shadow-relative flex flex-col justify-center w-full h-auto px-4 pt-10 pb-24">
                  <div className="title w-full flex justify-center items-center mt-0 mb-12">
                     <h5 className="text-xl font-semibold text-white uppercase">
                        Send Transaction
                     </h5>
                  </div>
                  <div className="input-bigger-container w-full font-medium">
                     <h5 className="text-sm ml-1 mb-1 text-white">
                        Receiver Address
                     </h5>
                     <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                        <input
                           placeholder="To Address"
                           className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                           value={address}
                           onChange={(e) => setAddress(e.target.value)}
                        />
                        <div className="password-eye cursor-pointer mr-3"></div>
                     </div>
                  </div>
                  <div className="input-bigger-container w-full font-medium mt-6">
                     <h5 className="text-sm ml-1 mb-1 text-white">Amount</h5>
                     <div className="container flex gap-2 h-full">
                        <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4 flex-1">
                           <input
                              placeholder="Amount"
                              className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                           />
                        </div>

                        <button className="px-4 bg-green-500 rounded-lg text-sm w-auto text-black">
                           Add Max
                        </button>
                     </div>
                  </div>
               </div>
               <div className="button-container w-full flex-1 flex flex-col justify-end mt-2 z-20">
                  <button className="w-full bg-green-600 py-3 mb-0 rounded-lg text-white text-sm uppercase disabled:opacity-50">
                     <h5 className="font-semibold">SEND</h5>
                  </button>
               </div>
            </div>
         </WhiteSpace>
      </div>
   );
};

export default SendTransaction;
