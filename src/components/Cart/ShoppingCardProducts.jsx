import React from 'react'
import { Products } from '../../data/data.jsx'
import CloseIcon from "../../assets/icons/CloseIcon.jsx"

function ShoppingCardProducts() {
  return (
    <div className="shopping-card-left">
      <h1>Shopping Cart</h1>
      <div className="shopping-card-items">
        {
          Products.map(item => (
            <div className="shopping-card-item" key={item.id}>
              <img src={item.img} alt={item.productCode} />
              <div className="shopping-card-item-datas">
                <div className="shopping-card-item-left">

                  <div className="shopping-card-item-info">
                    <h1>{item.title}</h1>
                    <p>{item.productCode}</p>
                  </div>
                </div>
                <div className="shopping-card-item-right">
                  <div className="shopping-card-quantity-selector">
                    <button>-</button>
                    <p>1</p>
                    <button >+</button>
                  </div>
                  <h1>{item.productPrice}</h1>
                  <button><CloseIcon /></button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ShoppingCardProducts