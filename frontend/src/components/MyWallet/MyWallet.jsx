import React, { useState, useEffect } from "react";
import "./MyWallet.css";

function MyWallet() {
  const [wallets, setWallets] = useState([
    { name: "Main Wallet", balance: 5000, funds: [] },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const createNewWallet = () => {
    const walletName = prompt("Enter name for new wallet:", "New Wallet");
    if (!walletName) return;

    const newWallet = { name: walletName, balance: 0, funds: [] };
    setWallets([...wallets, newWallet]);
  };

  const sendPayment = (walletIndex, amount) => {
    if (wallets[0].balance < amount) {
      alert("Not enough balance in the main wallet.");
      return;
    }

    setWallets((currentWallets) =>
      currentWallets.map((wallet, index) => {
        if (index === walletIndex) {
          return { ...wallet, balance: wallet.balance + amount };
        } else if (index === 0) {
          return { ...wallet, balance: wallet.balance - amount };
        }
        return wallet;
      })
    );
  };

  const requestPayment = (walletIndex, amount) => {
    if (wallets[walletIndex].balance < amount) {
      alert("Not enough balance in the wallet.");
      return;
    }

    setWallets((currentWallets) =>
      currentWallets.map((wallet, index) => {
        if (index === walletIndex) {
          return { ...wallet, balance: wallet.balance - amount };
        } else if (index === 0) {
          return { ...wallet, balance: wallet.balance + amount };
        }
        return wallet;
      })
    );
  };

  const handlePaymentAction = (walletIndex, isSending) => {
    const amount = parseFloat(prompt("Enter amount:", "0"));
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Invalid amount entered.");
      return;
    }

    if (isSending) {
      sendPayment(walletIndex, amount);
    } else {
      requestPayment(walletIndex, amount);
    }
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
            {wallet.name}
            <div className="balance">${wallet.balance.toFixed(2)}</div>
          </div>
          <div className="actions">
            <button
              className="payment-action"
              onClick={() => handlePaymentAction(index, true)}
            >
              Send a payment
            </button>
            {index !== 0 && (
              <button
                className="payment-action"
                onClick={() => handlePaymentAction(index, false)}
              >
                Request a payment
              </button>
            )}
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
