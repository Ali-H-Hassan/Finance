import React, { useState, useEffect } from "react";
import "./RecentTransactions.css";

function RecentTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="recent-transactions">
      <h1>Recent Transactions</h1>

      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button className="search-button">🔍</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.name}</td>
              <td>{transaction.date}</td>
              <td>{transaction.status}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransactions;
