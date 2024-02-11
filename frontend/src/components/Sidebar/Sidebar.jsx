import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../Assets/Logo.png";
import Avatar from "../Assets/Avatar.png";

function Sidebar() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/my-wallet");

  const handleNavClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className="sidebar-nav">
        <li className="nav-item">
          <a
            onClick={() => handleNavClick("/my-wallet")}
            className={`nav-link ${
              activeLink === "/my-wallet" ? "active" : ""
            }`}
          >
            My Wallet
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => handleNavClick("/my-card")}
            className={`nav-link ${activeLink === "/my-card" ? "active" : ""}`}
          >
            My Card
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => handleNavClick("/finance-chart")}
            className={`nav-link ${
              activeLink === "/finance-chart" ? "active" : ""
            }`}
          >
            Finance Chart
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => handleNavClick("/recent-transactions")}
            className={`nav-link ${
              activeLink === "/recent-transactions" ? "active" : ""
            }`}
          >
            Recent Transactions
          </a>
        </li>
      </ul>

      <div className="sidebar-footer">
        <div className="footer-link">
          <img src={Avatar} alt="Adrian Tra" />
          <span>Adrian Tra</span>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
