import React, { useEffect, useState } from "react";
import Warning from "../common/Warning";

const UsernameSetup = ({ onCanSteppableChange }) => {
   const [username, setUsername] = useState("");
   const checkUsername = () => {
      if (username.length > 5) {
         onCanSteppableChange(true);
      } else {
         onCanSteppableChange(false, "Username is too short");
      }
   };
   useEffect(() => {
      checkUsername();
   }, [username]);
   return (
      <div className="username-setup px-4 h-full justify-between flex flex-col w-full relative">
         <div className="warning px-4 relative">
            <Warning text="Set yourself a unique username" />
         </div>
         <div className="container flex-1 justify-center flex flex-col gap-6">
            <div className="title w-full flex justify-center items-center mt-0">
               <h5 className="text-xl font-semibold text-white uppercase">
                  Set Your Username
               </h5>
            </div>
            <div className="password-input-container w-full flex flex-col gap-4 justify-center">
               <div className="input-container w-full relative flex border rounded-lg py-[10px] items-center gap-4">
                  <input
                     placeholder="Enter a unique username"
                     className="w-full pl-4 text-sm flex items-center outline-none bg-transparent text-white font-medium"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="password-eye cursor-pointer mr-3"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UsernameSetup;
