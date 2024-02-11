import React, { useState, useEffect } from "react";
import "./MyCard.css";
import CardImage from "../Assets/Credit card.png";

function MyCard() {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/cards")
      .then((response) => response.json())
      .then((data) => {
        const firstCard = data[0];
        setCardData({
          cardNumber: firstCard.card_number,
          expiryDate: firstCard.expiry_date,
          cvv: firstCard.cvv,
          cardholderName: firstCard.cardholder_name,
        });
      })
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  return (
    <div className="my-card">
      <div className="card-container">
        <div className="card-preview">
          <img src={CardImage} alt="Card" />
          <div className="card-name">{cardData.cardholderName}</div>
        </div>
        <div className="card-details">
          <h2>Card Information</h2>
          <div className="card-info">
            <span>Card No.</span>
            <span>{cardData.cardNumber}</span>
          </div>
          <div className="card-info">
            <span>Expiry date</span>
            <span>{cardData.expiryDate}</span>
          </div>
          <div className="card-info">
            <span>CVV (3-digit security code)</span>
            <span>***</span>
          </div>
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
