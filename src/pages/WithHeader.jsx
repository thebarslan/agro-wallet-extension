import React from "react";
import Header from "../components/common/Header";

const WithHeader = ({ children }) => {
   return (
      <>
         <Header />
         {children}
      </>
   );
};

export default WithHeader;
