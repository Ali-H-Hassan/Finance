import React, { useState, useEffect } from "react";
import "./MyWallet.css";

function MyWallet() {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/wallets")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWallets(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const createNewWallet = () => {
    const walletName = prompt("Enter name for new wallet:", "New Wallet");
    if (!walletName) return;

    fetch("http://127.0.0.1:5000/api/wallets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: walletName }),
    })
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject("Failed to create wallet")
      )
      .then((newWallet) => {
        setWallets([...wallets, newWallet]);
      })
      .catch((error) => console.error("Error creating new wallet:", error));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="my-wallet">
      <h1>My Wallet</h1>
      <p>Keep track of your financial plan</p>

      {wallets.map((wallet, index) => (
        <div key={index} className="wallet-info">
          <div className="balance-info">
            <span role="img" aria-label="Wave">
              👋
            </span>{" "}
            Hi {wallet.name}!<div className="balance">${wallet.balance}</div>
          </div>
          <div className="funds-container">
            {wallet.funds.map((fund, fundIndex) => (
              <div className="fund" key={fundIndex}>
                <span role="img" aria-label={fund.name}>
                  {fund.emoji}
                </span>{" "}
                {fund.name}
                <div className="fund-details">
                  Last Paid on {fund.last_paid}
                  <div
                    className="progress"
                    style={{ width: `${fund.progress}%` }}
                  ></div>
                  ${fund.amount} / ${fund.target}
                </div>
              </div>
            ))}
          </div>
          <div className="actions">
            <button
              className="payment-action"
              onClick={() => console.log("Send payment")}
            >
              Send a payment
            </button>
            <button
              className="payment-action"
              onClick={() => console.log("Request payment")}
            >
              Request a payment
            </button>
          </div>
        </div>
      ))}

      <div className="create-wallet-action">
        <button onClick={createNewWallet}>Create New Wallet</button>
      </div>
    </div>
  );
}

export default MyWallet;
