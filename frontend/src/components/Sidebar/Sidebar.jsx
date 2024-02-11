import React from "react";
import "./Sidebar.css";
import Logo from "../Assets/Logo.png";

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <img src={Logo} alt="Logo" />
      </div>

      <ul className="sidebar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            My Wallet
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            My Card
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Finance Chart
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Recent Transactions
          </a>
        </li>
      </ul>

      <div className="sidebar-footer">
        <a href="#" className="footer-link">
          <img src="path_to_profile_image" alt="Adrian Tra" />
          <span>Adrian Tra</span>
        </a>
      </div>
    </nav>
  );
}

export default Sidebar;
