import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MyWallet from "./components/MyWallet/MyWallet";
import MyCard from "./components/MyCard/MyCard";
import FinanceChart from "./components/FinanceChart/FinanceChart";
import RecentTransactions from "./components/RecentTransactions/RecentTransactions";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-layout">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<MyWallet />} />
              <Route path="/my-wallet" element={<MyWallet />} />
              <Route path="/my-card" element={<MyCard />} />
              <Route path="/finance-chart" element={<FinanceChart />} />
              <Route
                path="/recent-transactions"
                element={<RecentTransactions />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
