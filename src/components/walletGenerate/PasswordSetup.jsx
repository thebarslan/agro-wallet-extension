import React, { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Warning from "../common/Warning";

const PasswordSetup = ({ onCanSteppableChange }) => {
   const [firstPasswordSee, setFirstPasswordSee] = useState(false);
   const [secondPasswordSee, setSecondPasswordSee] = useState(false);
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const checkPasswords = () => {
      if (password === confirmPassword && password.length > 5) {
         onCanSteppableChange(true);
      } else {
         onCanSteppableChange(false, "Passwords do not match");
      }
   };
   useEffect(() => {
      checkPasswords();
   }, [password, confirmPassword]);
   return (
      <div className="password-setup px-4 relative h-full flex flex-col justify-center">
         <div className="warning px-4 relative">
            <Warning text="Set yourself a strong password" />
         </div>
         <div className="title w-full flex justify-center items-center mt-4">
            <h5 className="text-xl font-semibold text-white uppercase">
               Set Your Password
            </h5>
         </div>
         <div className="password-input-container w-full flex flex-col gap-4 justify-center mt-8">
            <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
               <input
                  type={firstPasswordSee ? `text` : `password`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a strong password"
                  className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
               />
               <div
                  className="password-eye cursor-pointer mr-3"
                  onClick={() => setFirstPasswordSee(!firstPasswordSee)}
               >
                  {firstPasswordSee ? (
                     <IoEye className="w-6 h-auto text-white" />
                  ) : (
                     <IoEyeOff className="w-6 h-auto text-white" />
                  )}
               </div>
            </div>
            <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
               <input
                  type={secondPasswordSee ? `text` : `password`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
               />
               <div
                  className="password-eye cursor-pointer mr-3"
                  onClick={() => setSecondPasswordSee(!secondPasswordSee)}
               >
                  {secondPasswordSee ? (
                     <IoEye className="w-6 h-auto text-white" />
                  ) : (
                     <IoEyeOff className="w-6 h-auto text-white" />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default PasswordSetup;
