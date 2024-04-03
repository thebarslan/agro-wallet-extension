import React, { useState } from "react";
import Logo from "../../assets/images/agro_whiteLogo.png";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import WhiteSpace from "./WhiteSpace";
import { FaAngleDown } from "react-icons/fa6";
import MenuPasswordChange from "../menu/MenuPasswordChange";
import MenuNetworkChange from "../menu/MenuNetworkChange";
import { MdLogout } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [menuIndex, setMenuIndex] = useState(3);
   const menuIndexHandler = (index) => {
      if (menuIndex === index) {
         setMenuIndex(3);
         return;
      }
      setMenuIndex(index);
   };
   const navigate = useNavigate();
   return (
      <>
         <div className="header w-full h-12 flex items-center shadow-lg bg-shadow-relative rounded-none z-40">
            <WhiteSpace>
               <div className="header-container w-full h-full flex items-center justify-between">
                  <div className="logo w-auto h-full flex justify-start items-center flex-1">
                     <img src={Logo} className="w-auto h-8" />
                  </div>
                  <div className="platform-change-button flex flex-[2] justify-center w-full">
                     <h5 className="text-white font-semibold text-lg">
                        AGRO WALLET
                     </h5>
                  </div>

                  <div className="menu-button flex flex-1 justify-end">
                     <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="outline-none"
                     >
                        {isMenuOpen ? (
                           <IoClose className="h-8 w-auto text-white" />
                        ) : (
                           <FiMenu className="h-7 w-auto text-white" />
                        )}
                     </button>
                  </div>
               </div>
            </WhiteSpace>
         </div>
         <div
            className={`menu bg-shadow rounded-none flex flex-col p-2 justify-between ${
               isMenuOpen ? `menu-open` : `menu-close`
            }`}
         >
            <div className="openable-option flex flex-col gap-2">
               <div
                  className={`option-container w-full h-auto flex flex-col items-center bg-shadow-relative ${
                     menuIndex === 0 ? "open" : ""
                  }`}
               >
                  <div
                     className={`option overflow-hidden flex flex-col w-full px-5 ${
                        menuIndex === 0 ? "open" : ""
                     }`}
                  >
                     <MenuPasswordChange />
                  </div>
               </div>
               <div
                  className={`option-container w-full h-auto flex flex-col bg-shadow-relative items-center ${
                     menuIndex === 1 ? "open" : ""
                  }`}
               >
                  <div
                     className={`option-button w-full flex justify-between px-5 h-12 items-center cursor-pointer hover:bg-[#ffffff1c] rounded-xl ${
                        menuIndex === 1 && `bg-shadow-relative`
                     }`}
                     onClick={() => menuIndexHandler(1)}
                  >
                     <div className="container flex items-center gap-2">
                        <AiOutlineGlobal className="text-white h-6 w-auto" />
                        <h5 className="text-white font-medium text-base">
                           Set Network
                        </h5>
                     </div>
                     <FaAngleDown
                        className={`h-4 w-auto text-white down-arrow ${
                           menuIndex === 1 && `open`
                        }`}
                     />
                  </div>

                  <div
                     className={`option overflow-hidden flex w-full px-5  ${
                        menuIndex === 1 ? "open" : ""
                     }`}
                  >
                     <div className="container flex gap-2">
                        <MenuNetworkChange />
                     </div>
                  </div>
               </div>
               <button
                  className="w-full h-12 bg-shadow-relative px-5 flex items-center gap-2 hover:bg-[#ffffff3d]"
                  onClick={() => navigate("/settings")}
               >
                  <CiSettings className="text-white h-7 w-auto" />
                  <h5 className="text-white font-medium text-base">Settings</h5>
               </button>
            </div>
            <div className="logout-button w-full  h-auto mb-2">
               <button className="w-full h-12 bg-shadow-relative rounded-xl flex items-center pl-4 gap-6 hover:bg-[#ffffff3d]">
                  <MdLogout className="text-white h-7 w-auto" />
                  <h5 className="text-white font-medium text-base">Logout</h5>
               </button>
            </div>
         </div>
      </>
   );
};

export default Header;
