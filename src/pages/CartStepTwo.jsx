import React from "react";
import DeliveryIcon from "../assets/icons/DeliveryIcon";
import PaymentIcon from "../assets/icons/PaymentIconDefault";
import AdressIconDefault from "../assets/icons/AdressIconDefault";
import { Link } from "react-router-dom";
import { StepTwoDeliverySelection } from "../components/Cart";

function CartStepTwo() {
  return (
    <section className="step-two">
      <div className="container">
        <div className="step-two-wrap">
          <div className="step-two-top">
            <Link to="/cart/first-step" className="step-two-steps media">
              <AdressIconDefault />
              <div className="step-two-steps-text ">
                <p className="step-two-steps-text-subtitle default">Step 1</p>
                <h1 className="step-two-steps-text-title default">Address</h1>
              </div>
            </Link>

            <div className="step-two-steps">
              <DeliveryIcon />
              <Link to="/cart/second-step" className="step-two-steps-text">
                <p className="step-two-steps-text-subtitle">Step 2</p>
                <h1 className="step-two-steps-text-title">Shipping</h1>
              </Link>
            </div>

            <div className="step-two-steps">
              <PaymentIcon />
              <div className="step-two-steps-text">
                <p className="step-two-steps-text-subtitle default">Step 3</p>
                <h1 className="step-two-steps-text-title default">Payment</h1>
              </div>
            </div>
          </div>

          <StepTwoDeliverySelection />

          <div className="step-two-buttons">
            <Link to="/cart/first-step" className="step-two-btn">
              Back
            </Link>
            <Link to="/cart/third-step" className="step-two-btn">
              Next
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartStepTwo;
