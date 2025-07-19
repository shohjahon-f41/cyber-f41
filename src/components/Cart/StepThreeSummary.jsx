import React from "react";
import { StepThreeProducts } from "../../data/data";

function StepThreeSummary() {
  return (
    <div className="step-three-summary">
      <h1>Summary</h1>

      <div className="step-three-products-list">
        {StepThreeProducts.map((item) => (
          <div className="step-three-products-item" key={item.id}>
            <div className="step-three-products-left">
              <img src={item.img} alt="" />
              <h1>{item.title}</h1>
            </div>
            <div className="step-three-products-right">
              <h1 className="step-three-product-price">{item.price}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="step-three-address">
        <h1 className="step-three-address-title">Address</h1>
        <p className="step-three-address-subtitle">
          1131 Dusty Townline, Jacksonville, TX 40322
        </p>
      </div>

      <div className="step-three-delivery">
        <h1 className="step-three-delivery-title">Shipment method</h1>
        <p className="step-three-delivery-subtitle">Free</p>
      </div>

      <div className="shopping-card-total-price">
        <div className="shopping-card-total">
          <h1>Subtotal</h1>
          <p>$2347</p>
        </div>

        <div className="shopping-card-extra-prices">
          <h1>Estimated Tax</h1>
          <p>$50</p>
        </div>

        <div className="shopping-card-extra-prices">
          <h1>Estimated shipping & Handling</h1>
          <p>$29</p>
        </div>

        <div className="shopping-card-total">
          <h1>Total</h1>
          <p>$2426</p>
        </div>
      </div>
    </div>
  );
}

export default StepThreeSummary;
