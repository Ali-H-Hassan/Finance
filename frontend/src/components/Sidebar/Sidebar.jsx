import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../Assets/Logo.png";
import Avatar from "../Assets/Avatar.png";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className="sidebar-nav">
        <li className="nav-item">
          <a onClick={() => navigate("/my-wallet")} className="nav-link active">
            My Wallet
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => navigate("/my-card")} className="nav-link">
            My Card
          </a>
        </li>
        <li className="nav-item">
          <a onClick={() => navigate("/finance-chart")} className="nav-link">
            Finance Chart
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => navigate("/recent-transactions")}
            className="nav-link"
          >
            Recent Transactions
          </a>
        </li>
      </ul>

      <div className="sidebar-footer">
        <a href="#" className="footer-link">
          <img src={Avatar} alt="Adrian Tra" />
          <span>Adrian Tra</span>
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;
