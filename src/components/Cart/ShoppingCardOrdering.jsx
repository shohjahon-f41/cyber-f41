import React from 'react'
import {Link} from "react-router-dom"

function ShoppingCardOrdering() {
    return (
        <div className="shopping-card-ordering">
            <h1 className='shopping-card-ordering-title'>Order Summary</h1>
            <div className='shopping-card-discount'>
                <label htmlFor="">Discount code / Promo code
                    <input type="text" placeholder='Code' />
                </label>
            </div>

            <label htmlFor="" className='shopping-card-label-card'>Your bonus card number
                <div className="shopping-card-card-number">
                    <input type="number" placeholder='Enter Card Number' />
                    <button>Apply</button>
                </div>
            </label>

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

            <Link to="/cart/first-step" className="shopping-card-btn">Checkout</Link>

        </div>
    )
}

export default ShoppingCardOrdering