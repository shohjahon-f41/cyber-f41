import React from 'react'
import AdressIcon from '../assets/icons/AdressIcon.jsx'
import DeliveryIcon from '../assets/icons/DeliveryIconDefault.jsx'
import PaymentIcon from '../assets/icons/PaymentIconDefault.jsx'
import StepOneAdressSelection from '../components/Cart/StepOneAdressSelection.jsx'
import { Link } from 'react-router-dom'


function CartStepOne() {
    return (
        <div className="step-one">
            <div className="container">
                <div className="step-one-wrap">
                    <div className="step-one-top">
                        <Link to="/cart/first-step" className="step-one-steps">
                            <AdressIcon />
                            <div className="step-one-steps-text">
                                <p className='step-one-steps-text-subtitle'>Step 1</p>
                                <h1 className='step-one-steps-text-title'>Address</h1>
                            </div>
                        </Link>

                        <div className="step-one-steps">
                            <DeliveryIcon />
                            <div className="step-one-steps-text">
                                <p className='step-one-steps-text-subtitle default'>Step 2</p>
                                <h1 className='step-one-steps-text-title default'>Shipping</h1>
                            </div>
                        </div>

                        <div className="step-one-steps media">
                            <PaymentIcon />
                            <div className="step-one-steps-text">
                                <p className='step-one-steps-text-subtitle default'>Step 3</p>
                                <h1 className='step-one-steps-text-title default'>Payment</h1>
                            </div>
                        </div>
                    </div>

                    <StepOneAdressSelection />

                    <div className="step-one-buttons">
                        <Link to="/cart" className="step-one-btn">Back</Link>
                        <Link to="/cart/second-step" className="step-one-btn">Next</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartStepOne