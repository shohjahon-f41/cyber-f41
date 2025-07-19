import React from "react";
import CardImg from "/images/step-three-card-img.png";
import { Link } from "react-router-dom";

function StepThreePayment() {
  return (
    <div className="step-three-payment">
      <h1 className="step-three-payment-title">Payment</h1>

      <div className="step-three-payment-card-types">
        <h1 className="step-three-payment-card-items">Credit Card</h1>
        <h1 className="step-three-payment-card-items">PayPal</h1>
        <h1 className="step-three-payment-card-items">PayPal Credit</h1>
      </div>

      <img src={CardImg} alt="card img" className="step-three-card-img" />

      <div className="step-three-inputs">
        <input
          type="text"
          placeholder="Cardholder Name"
          className="step-three-card-infos"
        />
        <input
          type="number"
          placeholder="Card Number"
          className="step-three-card-infos"
        />
        <div className="step-three-card-additions">
          <input
            type="date"
            placeholder="Card Number"
            className="step-three-card-infos"
          />
          <input
            type="number"
            placeholder="CVV"
            className="step-three-card-infos"
          />
        </div>
      </div>

      <div className="step-three-correction-check">
        <input type="checkbox" />
        <p>Same as billing address</p>
      </div>

      <div className="step-three-buttons">
        <Link to="/cart/second-step" className="step-three-btn">
          Back
        </Link>
        <Link to="/" className="step-three-btn">
          Pay
        </Link>
      </div>
    </div>
  );
}

export default StepThreePayment;
