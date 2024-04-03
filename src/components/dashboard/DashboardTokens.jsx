import React from "react";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const tokens = [
   {
      id: 1,
      token: "0x1234567890",
      name: "Tether",
      currency: "USDT",
      balance: "25.752",
   },
   {
      id: 2,
      token: "0x1234567890",
      name: "Shiba Inu",
      currency: "SHIB",
      balance: "0.821",
   },
   {
      id: 3,
      token: "0x1234567890",
      name: "Deneme Token 1",
      currency: "DT1",
      balance: "100",
   },
   {
      id: 4,
      token: "0x1234567890",
      name: "Deneme Token 2",
      currency: "DT2",
      balance: "100.512",
   },
   {
      id: 5,
      token: "0x1234567890",
      name: "Deneme Token 3",
      currency: "DT3",
      balance: "100.4123",
   },
];

const DashboardTokens = () => {
   const navigate = useNavigate();
   return (
      <div className="tokens w-full mt-8">
         <div className="tokens-container w-full flex flex-col gap-2 h-[190px] pr-2 pl-1 overflow-y-scroll pb-2">
            {tokens.map((token) => (
               <div
                  key={token.id}
                  className="token w-full flex items-center gap-2 pl-3 pr-5 py-2 bg-[#ffffff3b] rounded-xl justify-between"
               >
                  <div className="token-info w-full flex flex-col">
                     <div className="token-name w-full flex items-center gap-1">
                        <h5 className="text-[13px] text-white">{token.name}</h5>
                        <h5 className="text-[13px] text-white">
                           ({token.currency})
                        </h5>
                     </div>
                     <div className="token-balance w-full flex items-center gap-1 text-green-500 -mt-[2px]">
                        <h5 className="text-xs">{token.balance}</h5>
                        <h5 className="text-xs">{token.currency}</h5>
                     </div>
                  </div>
                  <div className="token-button">
                     <IoSend className="h-4 w-auto hover:text-[#48cf0ab4]" />
                  </div>
               </div>
            ))}
         </div>
         <div className="title w-full flex items-center justify-center mt-[10px]">
            <h5
               className="text-sm text-green-500 rounded-xl cursor-pointer"
               onClick={() => navigate("/importtoken")}
            >
               Import a Token
            </h5>
         </div>
      </div>
   );
};

export default DashboardTokens;
