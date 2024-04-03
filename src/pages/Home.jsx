import React from "react";
import LoadingCircle from "../components/common/LoadingCircle";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import WhiteSpace from "../components/common/WhiteSpace";

const Home = () => {
   const navigate = useNavigate();
   return (
      <WhiteSpace>
         <div className="home w-auto h-full flex flex-col justify-center gap-2">
            <div className="home-container h-full my-7 w-full mx-auto rounded-xl relative flex flex-col justify-center items-center z-10 px-5">
               <div className="bg-shadow z-10"></div>
               <div className="container z-30 h-auto w-full relative flex flex-col">
                  {/* <div class="bg-shadow z-10 px-10"></div> */}
                  <div className="logo-container w-full px-10 flex justify-center py-6 rounded-lg bg-[#000000b7]">
                     <img src={Logo} alt="" className="w-full h-auto" />
                  </div>
                  <div className="container h-auto relative pt-8 pb-8 px-4 flex flex-col gap-2 mt-2">
                     <div className="bg-shadow -z-20"></div>
                     <div className="welcome-title bg-[#000000b7]  mx-auto text-white py-4 px-6 w-full rounded-xl flex flex-col">
                        <h1 className="font-medium text-center text-base">
                           Welcome to your
                        </h1>
                        <h1 className="font-medium text-center text-base">
                           AGRO Mobile Wallet!
                        </h1>
                     </div>
                     <div className="create-or-login w-full h-auto px-2 text-center py-0 rounded-xl mt-2 flex items-center justify-center  flex-col">
                        <h5 className="text-white font-normal text-sm">
                           Create or login a wallet to start using agro wallet
                           extension.
                        </h5>
                     </div>
                     <div className="buttons mt-2 flex flex-col gap-2">
                        <button
                           className="w-full h-9 text-white rounded-xl second-button bg-shadow-relative uppercase text-xs font-medium hover:bg-green-700 hover:text-white border-2 border-[#ffffff9f]"
                           onClick={() => navigate("/generatewallet")}
                        >
                           Create Wallet
                        </button>
                        <button
                           className="w-full h-9 text-white rounded-xl first-button bg-shadow-relative uppercase text-xs font-medium hover:bg-green-700 hover:text-white border-2 border-[#ffffff9f]"
                           onClick={() => navigate("/loginwallet")}
                        >
                           Login Wallet
                        </button>
                     </div>
                     <div className="import-wallet w-full flex items-center justify-center text-center mt-2">
                        <p className="text-white text-xs">
                           If you have a wallet already from another app than
                           click to{" "}
                           <span
                              className="text-green-400 cursor-pointer"
                              onClick={() => navigate("importwallet")}
                           >
                              Import.
                           </span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </WhiteSpace>
   );
};

export default Home;
