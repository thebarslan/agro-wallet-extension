import React from "react";
import WhiteSpace from "../components/common/WhiteSpace";
import BackArrow from "../components/common/BackArrow";
import MenuNetworkChange from "../components/menu/MenuNetworkChange";

const NetworkChange = () => {
   return (
      <div className="network-change">
         <BackArrow path="/dashboard" pageName="Network Change" />
         <WhiteSpace>
            <div className="network-change-inner bg-shadow-relative px-4 pt-2 pb-4 mt-4">
               <MenuNetworkChange />
            </div>
         </WhiteSpace>
      </div>
   );
};

export default NetworkChange;
