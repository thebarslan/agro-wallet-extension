import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Warning from "./components/common/Warning";
import Home from "./pages/Home";
import WalletGenerate from "./pages/WalletGenerate";
import Dashboard from "./pages/Dashboard";
import WithHeader from "./pages/WithHeader";
import WalletLogin from "./pages/WalletLogin";
import SendTransaction from "./pages/SendTransaction";
import WalletImport from "./pages/WalletImport";
import Settings from "./pages/Settings";
import TokenImport from "./pages/TokenImport";

function App() {
   return (
      <div className="App border-b border-r flex-1 h-screen relative">
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generatewallet" element={<WalletGenerate />} />
            <Route path="/loginwallet" element={<WalletLogin />} />
            <Route path="/importwallet" element={<WalletImport />} />
            <Route path="/sendtransaction" element={<SendTransaction />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/importtoken" element={<TokenImport />} />
            <Route
               path="/dashboard"
               element={<WithHeader children={<Dashboard />} />}
            />
         </Routes>
      </div>
   );
}

export default App;
