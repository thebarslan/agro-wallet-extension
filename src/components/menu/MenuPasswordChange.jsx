import React, { useState } from "react";
import Warning from "../common/Warning";

const MenuPasswordChange = () => {
   const [oldPassword, setOldPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [newPasswordAgain, setNewPasswordAgain] = useState("");
   return (
      <div className="menu-password-change flex flex-col gap-2 text-white mt-6">
         <div className="input-bigger-container w-full -mt-2">
            <h5 className="text-sm ml-1 mb-1">Current Password</h5>
            <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
               <input
                  placeholder="Enter your current password"
                  className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
               />
            </div>
         </div>
         <div className="warning-box w-full relative -mt-0">
            <Warning text="Please enter a strong password" />
         </div>
         <div className="input-bigger-container w-full mt-11">
            <h5 className="text-sm ml-1 mb-1">New Password</h5>
            <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
               <input
                  placeholder="Enter your new password"
                  className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
               />
            </div>
         </div>

         <div className="input-bigger-container w-full">
            <h5 className="text-sm ml-1 mb-1">New Password Again</h5>
            <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
               <input
                  placeholder="Enter your new password again"
                  className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                  value={newPasswordAgain}
                  onChange={(e) => setNewPasswordAgain(e.target.value)}
               />
            </div>
         </div>
         <div className="button-container w-full flex-1 flex flex-col justify-end mt-4 z-20">
            <button className="w-full bg-green-600 py-2 mb-8 rounded-3xl text-white text-sm uppercase disabled:opacity-50">
               <h5>CHANGE PASSWORD</h5>
            </button>
         </div>
      </div>
   );
};

export default MenuPasswordChange;
