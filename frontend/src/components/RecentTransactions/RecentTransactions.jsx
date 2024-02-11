import React from "react";
import "./RecentTransactions.css";

function RecentTransactions() {
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
          <tr>
            <td>9622296152</td>
            <td>Sherman Blankenship</td>
            <td>08 Jan, 2022</td>
            <td>Pending</td>
            <td>$217.90</td>
          </tr>
        </tbody>
      </table>

      <div className="pagination">
        <span>Items per page:</span>
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <div className="pagination-controls">
          <button>«</button>
          <button>‹</button>
          <span>1-10 of 23</span>
          <button>›</button>
          <button>»</button>
        </div>
      </div>

      <button className="download-button">Download the Excel File</button>
    </div>
  );
}

export default RecentTransactions;
