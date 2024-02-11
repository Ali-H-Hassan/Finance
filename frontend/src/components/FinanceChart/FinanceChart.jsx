import React from "react";
import "./FinanceChart.css"; // Make sure the CSS file is created and linked

function FinanceChart() {
  return (
    <div className="finance-chart">
      <h1>Finance Chart</h1>
      <p>Keep track your financial plan</p>

      <div className="notification">
        <span role="img" aria-label="Info">
          ℹ️
        </span>
        Please remember to fill that data required for your debit card
        <button>Got it</button>
      </div>

      <div className="chart-section">
        {/* Your chart will be rendered here, for now it's a placeholder */}
        <div className="chart-placeholder">Chart Goes Here</div>
        {/* Dropdowns for filtering the chart */}
        <div className="chart-filters">
          <select name="chartType">
            <option value="income">Income Chart</option>
            {/* Other options */}
          </select>
          <select name="timePeriod">
            <option value="thisYear">This Year</option>
            {/* Other options */}
          </select>
        </div>
      </div>

      <div className="statistics">
        <div className="statistic lifetime-income">
          <span role="img" aria-label="Lifetime Income">
            💼
          </span>
          Lifetime Income
          <span>$40,728</span>
        </div>
        <div className="statistic lifetime-outcome">
          <span role="img" aria-label="Lifetime Outcome">
            💸
          </span>
          Lifetime Outcome
          <span>$30,239</span>
        </div>
        <div className="statistic bonus-income">
          <span role="img" aria-label="Bonus Income">
            🎉
          </span>
          Bonus Income
          <span>$2,490</span>
        </div>
      </div>
    </div>
  );
}

export default FinanceChart;
