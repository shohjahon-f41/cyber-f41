import React from 'react'
import { DeliveryList } from '../../data/data'

function StepTwoDeliverySelection() {
    return (
        <div className="step-two-delivery-selection">
            <h1 className="step-two-delivery-selection-title">Shipment Method</h1>
            <div className="step-two-delivery-list">
                {
                    DeliveryList.map(item => (
                        <div className="step-two-delivery-list-item" key={item.id}>
                            <div className="step-two-delivery-list-left">
                                <input type="radio" />
                                <h1 className='step-two-delivery-method'>{item.method}</h1>
                                <p className="step-two-delivery-duration">{item.duration}</p>
                            </div>

                            <div className="step-two-delivery-list-right">
                                <h1 className="step-two-delivery-arrival-date">{item.arrivalDate}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default StepTwoDeliverySelection