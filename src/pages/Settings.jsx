import React, { useState } from "react";
import WhiteSpace from "../components/common/WhiteSpace";
import BackArrow from "../components/common/BackArrow";
import { FaAngleDown } from "react-icons/fa";
import MenuNetworkChange from "../components/menu/MenuNetworkChange";
import { AiOutlineGlobal } from "react-icons/ai";
import MenuPasswordChange from "../components/menu/MenuPasswordChange";
import MenuGetPrivateKey from "../components/menu/MenuGetPrivateKey";
import Menu2FA from "../components/menu/Menu2FA";

const Settings = () => {
   const [menuIndex, setMenuIndex] = useState(3);
   const menuIndexHandler = (index) => {
      if (menuIndex === index) {
         setMenuIndex(3);
         return;
      }
      setMenuIndex(index);
   };
   return (
      <div className="settings w-full h-full">
         <BackArrow path="/dashboard" pageName="Settings" />
         <WhiteSpace>
            <div className="settings-container mt-3">
               <div className="openable-option flex flex-col gap-2">
                  <div
                     className={`option-container w-full h-auto flex flex-col items-center bg-shadow-relative ${
                        menuIndex === 0 ? "open" : ""
                     }`}
                  >
                     <div
                        className={`option-button w-full flex justify-between px-5 h-12 items-center cursor-pointer hover:bg-[#ffffff1c] rounded-xl ${
                           menuIndex === 0 && `bg-shadow-relative`
                        }`}
                        onClick={() => menuIndexHandler(0)}
                     >
                        <h5 className="text-white font-medium text-base">
                           Change Password
                        </h5>
                        <FaAngleDown
                           className={`h-4 w-auto text-white down-arrow ${
                              menuIndex === 0 && `open`
                           }`}
                        />
                     </div>

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
                           <h5 className="text-white font-medium text-base">
                              Get Private Key
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
                           <MenuGetPrivateKey />
                        </div>
                     </div>
                  </div>
                  <div
                     className={`option-container w-full h-auto flex flex-col items-center bg-shadow-relative ${
                        menuIndex === 2 ? "open" : ""
                     }`}
                  >
                     <div
                        className={`option-button w-full flex justify-between px-5 h-12 items-center cursor-pointer hover:bg-[#ffffff1c] rounded-xl ${
                           menuIndex === 2 && `bg-shadow-relative`
                        }`}
                        onClick={() => menuIndexHandler(2)}
                     >
                        <h5 className="text-white font-medium text-base">
                           2FA Options
                        </h5>
                        <FaAngleDown
                           className={`h-4 w-auto text-white down-arrow ${
                              menuIndex === 2 && `open`
                           }`}
                        />
                     </div>

                     <div
                        className={`option overflow-hidden flex flex-col w-full px-5 justify-center ${
                           menuIndex === 2 ? "open" : ""
                        }`}
                     >
                        <Menu2FA />
                     </div>
                  </div>
               </div>
            </div>
         </WhiteSpace>
      </div>
   );
};

export default Settings;
