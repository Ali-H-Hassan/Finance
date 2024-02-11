import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MyWallet from "./components/MyWallet/MyWallet";
import MyCard from "./components/MyCard/MyCard";
import Chart from "./components/FinanceChart/FinanceChart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default App;
