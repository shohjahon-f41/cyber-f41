import React from "react";
import AdressIconDefault from "../assets/icons/AdressIconDefault.jsx";
import DeliveryIconDefault from "../assets/icons/DeliveryIconDefault";
import PaymentIcon from "../assets/icons/PaymentIcon.jsx";
import StepThreeSummary from "../components/Cart/StepThreeSummary.jsx";
import StepThreePayment from "../components/Cart/StepThreePayment.jsx";

function CartStepThree() {
  return (
    <section className="step-three">
      <div className="container">
        <div className="step-three-wrap">
          <div className="step-three-top">
            <div className="step-three-steps media">
              <AdressIconDefault />
              <div className="step-three-steps-text ">
                <p className="step-three-steps-text-subtitle default">Step 1</p>
                <h1 className="step-three-steps-text-title default">Address</h1>
              </div>
            </div>

            <div className="step-three-steps">
              <DeliveryIconDefault />
              <div className="step-three-steps-text">
                <p className="step-three-steps-text-subtitle default">Step 2</p>
                <h1 className="step-three-steps-text-title default">
                  Shipping
                </h1>
              </div>
            </div>

            <div className="step-three-steps">
              <PaymentIcon />
              <div className="step-three-steps-text">
                <p className="step-three-steps-text-subtitle">Step 3</p>
                <h1 className="step-three-steps-text-title">Payment</h1>
              </div>
            </div>
          </div>

          <div className="step-three-bottom">
            <StepThreeSummary />
            <StepThreePayment />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartStepThree;
