import React from "react";
import DashboardBalance from "../components/dashboard/DashboardBalance";
import WhiteSpace from "../components/common/WhiteSpace";
import DashboardWalletAddress from "../components/dashboard/DashboardWalletAddress";
import DashboardPanel from "../components/dashboard/DashboardPanel";

const Dashboard = () => {
   return (
      <div className="dashboard">
         <WhiteSpace>
            <DashboardWalletAddress />
            <DashboardBalance />
            <DashboardPanel />
         </WhiteSpace>
      </div>
   );
};

export default Dashboard;
