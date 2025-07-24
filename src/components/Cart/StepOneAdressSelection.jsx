import React from 'react'
import EditIcon from '../../assets/icons/EditIcon'
import CloseIcon from '../../assets/icons/CloseIcon'
import { AddressList } from '../../data/data'


function StepOneAdressSelection() {
    return (
        <div className="step-one-address-selection">
            <h1 className="step-one-address-selection-title">Select Address</h1>
            <div className="step-one-address-list">
                {
                    AddressList.map(item => (
                        <div className="step-one-address-list-item" key={item.id}>
                            <div className="step-one-address-list-left">
                                <input type="radio" />
                                <div className="step-one-address-list-left-infos">
                                    <div className="step-one-address-list-left-infos-where">
                                        <h1>{item.title}</h1>
                                        <p>{item.location}</p>
                                    </div>
                                    <h1 className="step-one-address-list-left-infos-completed-location">{item.completedAddress}</h1>
                                    <h1 className='step-one-address-list-left-infos-phone'>{item.phoneNumber}</h1>
                                </div>
                            </div>

                            <div className="step-one-address-list-right">
                                <button className="edit-btn">
                                    <EditIcon />
                                </button>
                                <button className="close-btn">
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* <div class="step-one-add-new-address">
                <button class="step-one-add-address-btn">
                    <span>+</span> Add New Address
                </button>
            </div> */}
        </div>
    )
}

export default StepOneAdressSelection