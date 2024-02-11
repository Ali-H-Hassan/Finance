import React, { useState, useEffect } from "react";
import "./RecentTransactions.css";

function RecentTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTransaction, setNewTransaction] = useState({
    name: "",
    date: "",
    status: "",
    amount: 0,
  });
  const downloadTransactions = () => {
    fetch("http://127.0.0.1:5000/download-transactions")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "transactions.csv";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => console.error("Error downloading the file:", error));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject("Failed to save")
      )
      .then((data) => {
        setTransactions([...transactions, data]);
        setNewTransaction({
          name: "",
          date: "",
          status: "",
          amount: 0,
        });
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
      <form onSubmit={handleSubmit} className="add-transaction-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newTransaction.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={newTransaction.date}
          onChange={handleChange}
          required
        />
        <select
          name="status"
          value={newTransaction.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
      <button onClick={downloadTransactions}>Download Transactions</button>
    </div>
  );
}

export default RecentTransactions;
