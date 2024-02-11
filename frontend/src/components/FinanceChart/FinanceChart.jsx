import React, { useState, useEffect } from "react";
import "./FinanceChart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function FinanceChart() {
  const [financialStats, setFinancialStats] = useState({
    lifetimeIncome: 0,
    lifetimeOutcome: 0,
    bonusIncome: 0,
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Income",
        data: [],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/financial-statistics")
      .then((response) => response.json())
      .then((data) => {
        setFinancialStats({
          lifetimeIncome: data.lifetimeIncome,
          lifetimeOutcome: data.lifetimeOutcome,
          bonusIncome: data.bonusIncome,
        });
      });

    fetchChartData("income", "thisYear");
  }, []);

  const fetchChartData = (chartType, timePeriod) => {
    fetch(
      `http://127.0.0.1:5000/api/chart-data?type=${chartType}&period=${timePeriod}`
    )
      .then((response) => response.json())
      .then((data) => {
        setChartData({
          ...chartData,
          labels: data.labels,
          datasets: [
            {
              ...chartData.datasets[0],
              data: data.datasets[0].data,
            },
          ],
        });
      });
  };

  const handleChartTypeChange = (e) => {
    fetchChartData(e.target.value, "thisYear");
  };

  return (
    <div className="finance-chart">
      <h1>Finance Chart</h1>
      <p>Keep track your financial plan</p>

      <div className="chart-section">
        <div className="chart-placeholder">
          <Line data={chartData} options={{ responsive: true }} />
        </div>
        <div className="chart-filters">
          <select name="chartType" onChange={handleChartTypeChange}>
            <option value="income">Income Chart</option>
          </select>
          <select name="timePeriod">
            <option value="thisYear">This Year</option>
          </select>
        </div>
      </div>

      <div className="statistics">
        <div className="statistic lifetime-income">
          💼 Lifetime Income <span>${financialStats.lifetimeIncome}</span>
        </div>
        <div className="statistic lifetime-outcome">
          💸 Lifetime Outcome <span>${financialStats.lifetimeOutcome}</span>
        </div>
        <div className="statistic bonus-income">
          🎉 Bonus Income <span>${financialStats.bonusIncome}</span>
        </div>
      </div>
    </div>
  );
}

export default FinanceChart;
