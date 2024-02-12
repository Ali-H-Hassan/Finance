import React, { useState } from "react";
import "./MyWallet.css";

function MyWallet() {
  const [wallets, setWallets] = useState([
    { name: "Main Wallet", balance: 5000, funds: [] },
  ]);

  const createNewWallet = () => {
    const walletName = prompt("Enter name for new wallet:", "New Wallet");
    if (!walletName) return;

    const newWallet = { name: walletName, balance: 0, funds: [] };
    setWallets([...wallets, newWallet]);
  };

  const sendPayment = (walletIndex, amount) => {
    if (walletIndex === 0) {
      alert("Cannot send payment from the main wallet.");
      return;
    }
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
    if (walletIndex === 0) {
      alert("Cannot request payment to the main wallet.");
      return;
    }
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

  return (
    <div className="my-wallet">
      <h1>My Wallet</h1>
      <p>Keep track of your financial plan</p>

      {wallets.map((wallet, index) => (
        <div
          key={index}
          className={`wallet-info ${
            index === 0 ? "main-wallet" : "sub-wallet"
          }`}
        >
          <div className="wallet-header">
            <h2>{wallet.name}</h2>
            <div className="balance">${wallet.balance.toFixed(2)}</div>
          </div>
          <div className="actions">
            {index !== 0 && (
              <button
                className="payment-action"
                onClick={() => handlePaymentAction(index, true)}
              >
                Send a payment
              </button>
            )}
            <button
              className="payment-action"
              onClick={() => handlePaymentAction(index, false)}
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
