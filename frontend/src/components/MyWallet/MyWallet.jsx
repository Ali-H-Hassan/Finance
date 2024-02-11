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

      <div className="payment-actions">
        <button>Send a payment</button>
        <button>Request a payment</button>
      </div>

      <div className="funds">
        <div className="fund">
          <span role="img" aria-label="Heart">
            ❤️
          </span>{" "}
          Emergency fund
          <div className="fund-details">
            Last Paid on August 28, 2022
            <div className="progress">
              <div className="progress-bar" style={{ width: "30%" }}></div>
            </div>
            $300 / $1000
          </div>
        </div>
      </div>

      <div className="create-wallet">
        <button>Create New Wallet</button>
      </div>
    </div>
  );
}

export default MyWallet;
