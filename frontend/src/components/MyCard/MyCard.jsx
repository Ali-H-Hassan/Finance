import React from "react";
import "./MyCard.css";
import Card from "../Assets/Card.png";

function MyCard() {
  return (
    <div className="my-card">
      <h1>My Card</h1>
      <p>Keep track your financial plan</p>

      <div className="card-container">
        <div className="card-preview">
          <img src={Card} alt="Card" />
          <div className="card-name">ADRIAN TRA</div>
        </div>
        <div className="card-details">
          <h2>Card Information</h2>
          <div className="card-info">
            <span>Card No.</span>
            <span>4889 9271 1937 1932</span>
          </div>
          <div className="card-info">
            <span>Expiry date</span>
            <span>12/28</span>
          </div>
          <div className="card-info">
            <span>CVV (3-digit security code)</span>
            <span>***</span>
          </div>
          <button className="personalize-button">
            See how we can personalize your account:
          </button>
        </div>
      </div>

      <div className="help-links">
        <h2>See Our Help</h2>
        <ul>
          <li>Check Your Cash Flow</li>
          <li>Change Primary Card</li>
          <li>Pay Tax</li>
          <li>Make Invoice</li>
          <li>Refer a Friend</li>
          <li>Look More</li>
        </ul>
      </div>
    </div>
  );
}

export default MyCard;
