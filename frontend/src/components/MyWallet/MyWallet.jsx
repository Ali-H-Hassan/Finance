import React from "react";
import "./MyWallet.css";

function MyWallet() {
  return (
    <div className="my-wallet">
      <h1>My Wallet</h1>
      <p>Keep track your financial plan</p>

      <div className="balance-info">
        <span role="img" aria-label="Wave">
          👋
        </span>{" "}
        Hi Adrian!
        <div className="balance">$124,543</div>
      </div>

      <div className="actions">
        <button className="payment-action">Send a payment</button>
        <button className="payment-action">Request a payment</button>
      </div>

      <div className="funds-container">
        <div className="fund">
          <span role="img" aria-label="Heart">
            ❤️
          </span>{" "}
          Emergency fund
          <div className="fund-details">
            Last Paid on August 28, 2022
            <div className="progress" style={{ width: "30%" }}></div>
            $300 / $1000
          </div>
        </div>
        <div className="fund">
          <span role="img" aria-label="Suitcase">
            💼
          </span>{" "}
          Travel Plan
          <div className="fund-details">
            Last Paid on June 01, 2022
            <div className="progress" style={{ width: "50%" }}></div>
            $10,000 / $20,000
          </div>
        </div>
        <div className="fund">
          <span role="img" aria-label="Books">
            📚
          </span>{" "}
          Education
          <div className="fund-details">
            Last Paid on May 14, 2022
            <div className="progress" style={{ width: "70%" }}></div>
            $7,000 / $10,000
          </div>
        </div>
        <div className="fund">
          <span role="img" aria-label="Groceries">
            🛒
          </span>{" "}
          Foods and Groceries
          <div className="fund-details">
            Last Paid on August 28, 2022
            <div className="progress" style={{ width: "30%" }}></div>
            $300 / $1000
          </div>
        </div>
        <div className="fund">
          <span role="img" aria-label="Wrench">
            🔧
          </span>{" "}
          Repair Vehicle
          <div className="fund-details">
            Last Paid on August 01, 2022
            <div className="progress" style={{ width: "90%" }}></div>
            $900 / $1000
          </div>
        </div>
        <div className="fund">
          <span role="img" aria-label="Heart">
            ❤️
          </span>{" "}
          Donation
          <div className="fund-details">
            Last Paid on August 20, 2022
            <div className="progress" style={{ width: "20%" }}></div>
            $200 / $1000
          </div>
        </div>
      </div>

      <div className="create-wallet-action">
        <button>Create New Wallet</button>
      </div>
    </div>
  );
}

export default MyWallet;
